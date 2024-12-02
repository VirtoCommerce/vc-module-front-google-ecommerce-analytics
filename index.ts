import { sumBy } from "lodash";
import type {
  Breadcrumb,
  CartType,
  CustomerOrderType,
  LineItemType,
  OrderLineItemType,
  Product,
  VariationType,
  ICurrency,
  LoggerType,
  DiscountType,
  OrderDiscountType,
} from "./types";
import type { ComputedRef } from "vue";

/**
 * Custom events. The items array can not be added
 */
type CustomEventNamesType = "place_order" | "clear_cart";
type EventParamsType = Gtag.ControlParams & Gtag.EventParams & Gtag.CustomParams;
type EventParamsExtendedType = EventParamsType & { item_list_id?: string; item_list_name?: string };

const DEBUG_PREFIX = "[GA]";

const GOOGLE_ANALYTICS_SETTINGS_MAPPING = {
  "GoogleAnalytics4.MeasurementId": "trackId",
} as const;

type SettingValueType = string | number | boolean | null;
type DependenciesType = {
  isDevelopment: boolean;
  getModuleSettings: <T extends Record<string, string>>(settingsMapping: T) => { [K in T[keyof T]]?: SettingValueType };
  logger: LoggerType;
  useScriptTag: (src: string) => void;
  currentCurrency: ComputedRef<ICurrency>;
  currencyCode: string;
};

let currencyCode: string;
let canUseDOM = false;
let logger: LoggerType = {
  debug() {},
  error() {},
  info() {},
  warn() {},
};

function initModule({
  getModuleSettings,
  isDevelopment,
  logger: loggerInstance,
  useScriptTag,
  currentCurrency,
  currencyCode: initialCurrencyCode,
}: DependenciesType) {
  const settings = getModuleSettings(GOOGLE_ANALYTICS_SETTINGS_MAPPING);
  const { trackId } = settings;
  canUseDOM = !!(typeof window !== "undefined" && window.document?.createElement);

  if (!canUseDOM || !trackId) {
    return;
  }
  logger = loggerInstance;
  if (!isDevelopment) {
    useScriptTag(`https://www.googletagmanager.com/gtag/js?id=${trackId}`);
  } else {
    logger?.debug(DEBUG_PREFIX, "initialized without sync with google");
  }
  currencyCode = initialCurrencyCode;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // is not working with rest
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", String(trackId), { debug_mode: true });
  window.gtag("set", { currency: currentCurrency.value.code });
}

function getCategories(breadcrumbs: Breadcrumb[] = []): Record<string, string> {
  const categories: Record<string, string> = {};

  breadcrumbs
    .filter((breadcrumb) => breadcrumb.typeName !== "CatalogProduct")
    .slice(0, 5) // first five, according to the documentation
    .forEach((breadcrumb, i) => {
      const number = i + 1;
      categories[`item_category${number > 1 ? number : ""}`] = breadcrumb.title;
    });

  return categories;
}

function productToGtagItem(item: Product | VariationType, index?: number): Gtag.Item {
  const categories: Record<string, string> =
    "breadcrumbs" in item ? getCategories(item.breadcrumbs as Breadcrumb[]) : {};

  return {
    index,
    item_id: item.code,
    item_name: item.name,
    affiliation: item.vendor?.name,
    price: item.price?.list?.amount,
    discount: item.price?.discountAmount?.amount,
    quantity: item.availabilityData?.availableQuantity,
    ...categories,
  };
}

function lineItemToGtagItem(
  item: LineItemType | OrderLineItemType,
  index?: number,
): Gtag.Item & { promotions: string } {
  const categories: Record<string, string> = getCategories(item.product?.breadcrumbs);

  return {
    index,
    item_id: item.sku,
    item_name: item.name,
    affiliation: item.vendor?.name || "?",
    currency: item.placedPrice.currency.code,
    discount: item.discountAmount?.amount || item.discountTotal?.amount,
    price: "price" in item ? item.price.amount : item.listPrice.amount,
    quantity: item.quantity,
    promotion_id: item.discounts?.[0]?.promotionId,
    promotion_name: item.discounts?.[0]?.promotionName,
    promotions: item.discounts
      ?.map((promotion: DiscountType | OrderDiscountType) => promotion.promotionName)
      .join(", ")
      .trim(),
    ...categories,
  };
}

/** @deprecated use direct mapping */
function getCartEventParams(cart: CartType): EventParamsType {
  return {
    currency: currencyCode,
    value: cart.total.amount,
    items: cart.items.map(lineItemToGtagItem),
    items_count: cart.items.length,
  };
}

function sendEvent(eventName: Gtag.EventNames | CustomEventNamesType, eventParams?: EventParamsType): void {
  if (canUseDOM && window.gtag) {
    window.gtag("event", eventName, eventParams);
  } else {
    logger?.debug(DEBUG_PREFIX, eventName, eventParams);
  }
}

function viewItemList(items: { code: string }[] = [], params?: EventParamsExtendedType): void {
  sendEvent("view_item_list", {
    ...params,
    items_skus: items
      .map((el) => el.code)
      .join(", ")
      .trim(),
    items_count: items.length,
  });
}

function selectItem(item: Product | LineItemType, params?: EventParamsExtendedType): void {
  const gtagItem = "productId" in item ? lineItemToGtagItem(item) : productToGtagItem(item);

  sendEvent("select_item", {
    ...params,
    items: [gtagItem],
  });
}

function viewItem(item: Product, params?: EventParamsExtendedType): void {
  sendEvent("view_item", {
    ...params,
    currency: currencyCode,
    value: item.price?.actual?.amount,
    items: [productToGtagItem(item)],
  });
}

function addItemToWishList(item: Product, params?: EventParamsExtendedType): void {
  sendEvent("add_to_wishlist", {
    ...params,
    currency: currencyCode,
    value: item.price?.actual?.amount,
    items: [productToGtagItem(item)],
  });
}

function addItemToCart(item: Product | VariationType, quantity = 1, params?: EventParamsExtendedType): void {
  const inputItem = productToGtagItem(item);

  inputItem.quantity = quantity;

  sendEvent("add_to_cart", {
    ...params,
    currency: currencyCode,
    value: item.price?.actual?.amount * quantity,
    items: [inputItem],
  });
}

function addItemsToCart(items: (Product | VariationType)[], params?: EventParamsExtendedType): void {
  const subtotal: number = sumBy(items, (item) => item?.price?.actual?.amount);
  const inputItems = items.filter((item) => item).map((item) => productToGtagItem(item));

  sendEvent("add_to_cart", {
    ...params,
    currency: currencyCode,
    value: subtotal,
    items: inputItems,
    items_count: inputItems.length,
  });
}

function removeItemsFromCart(items: LineItemType[], params?: EventParamsExtendedType): void {
  const subtotal: number = sumBy(items, (item) => item.extendedPrice?.amount);
  const inputItems = items.map((item) => lineItemToGtagItem(item));

  sendEvent("remove_from_cart", {
    ...params,
    currency: currencyCode,
    value: subtotal,
    items: inputItems,
    items_count: inputItems.length,
  });
}

function viewCart(cart: CartType, params?: EventParamsExtendedType): void {
  const cartEventParams: EventParamsType = getCartEventParams(cart);

  sendEvent("view_cart", {
    ...params,
    ...cartEventParams,
  });
}

function clearCart(cart: CartType, params?: EventParamsExtendedType): void {
  const cartEventParams: EventParamsType = getCartEventParams(cart);

  sendEvent("clear_cart", {
    ...params,
    ...cartEventParams,
  });
}

function beginCheckout(cart: CartType, params?: EventParamsExtendedType): void {
  try {
    sendEvent("begin_checkout", {
      ...params,
      currency: cart.currency.code,
      value: cart.total.amount,
      items: cart.items.map(lineItemToGtagItem),
      items_count: cart.items.length,
      coupon: cart.coupons?.[0]?.code,
    });
  } catch (e) {
    logger?.error(DEBUG_PREFIX, beginCheckout.name, e);
  }
}

function addShippingInfo(cart?: CartType, params?: EventParamsExtendedType, shipmentMethodOption?: string): void {
  try {
    sendEvent("add_shipping_info", {
      ...params,
      shipping_tier: shipmentMethodOption,
      currency: cart?.shippingPrice.currency.code,
      value: cart?.shippingPrice.amount,
      coupon: cart?.coupons?.[0]?.code,
      items: cart?.items.map(lineItemToGtagItem),
      items_count: cart?.items.length,
    });
  } catch (e) {
    logger?.error(DEBUG_PREFIX, addShippingInfo.name, e);
  }
}

function addPaymentInfo(cart?: CartType, params?: EventParamsExtendedType, paymentGatewayCode?: string): void {
  try {
    sendEvent("add_payment_info", {
      ...params,
      payment_type: paymentGatewayCode,
      currency: cart?.currency?.code,
      value: cart?.total?.amount,
      coupon: cart?.coupons?.[0]?.code,
      items: cart?.items.map(lineItemToGtagItem),
      items_count: cart?.items.length,
    });
  } catch (e) {
    logger?.error(DEBUG_PREFIX, addPaymentInfo.name, e);
  }
}

function purchase(order: CustomerOrderType, transactionId?: string, params?: EventParamsExtendedType): void {
  try {
    sendEvent("purchase", {
      ...params,
      currency: order.currency?.code,
      transaction_id: transactionId,
      value: order.total!.amount,
      coupon: order.coupons?.[0],
      shipping: order.shippingTotal?.amount,
      tax: order.taxTotal?.amount,
      items: order.items!.map(lineItemToGtagItem),
      items_count: order?.items?.length,
    });
  } catch (e) {
    logger?.error(DEBUG_PREFIX, purchase.name, e);
  }
}

function placeOrder(order: CustomerOrderType, params?: EventParamsExtendedType): void {
  try {
    sendEvent("place_order", {
      ...params,
      currency: order.currency?.code,
      value: order.total?.amount,
      coupon: order.coupons?.[0],
      shipping: order.shippingTotal.amount,
      tax: order.taxTotal.amount,
      items_count: order.items?.length,
    });
  } catch (e) {
    logger?.error(DEBUG_PREFIX, placeOrder.name, e);
  }
}

function search(searchTerm: string, visibleItems: { code: string }[] = [], itemsCount: number = 0): void {
  sendEvent("search", {
    search_term: searchTerm,
    items_count: itemsCount,
    visible_items: visibleItems
      .map((el) => el.code)
      .join(", ")
      .trim(),
  });
}

export function useGoogleAnalyticsModule() {
  return {
    sendEvent,
    viewItemList,
    selectItem,
    viewItem,
    addItemToWishList,
    addItemToCart,
    addItemsToCart,
    removeItemsFromCart,
    viewCart,
    clearCart,
    beginCheckout,
    addShippingInfo,
    addPaymentInfo,
    purchase,
    placeOrder,
    search,
    initModule,
  };
}

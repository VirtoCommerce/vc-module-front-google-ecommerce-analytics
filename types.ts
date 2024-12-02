/* eslint-disable @typescript-eslint/naming-convention */
export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {
    input: string;
    output: string;
  };
  String: {
    input: string;
    output: string;
  };
  Boolean: {
    input: boolean;
    output: boolean;
  };
  Int: {
    input: number;
    output: number;
  };
  Float: {
    input: number;
    output: number;
  };
  Date: {
    input: string;
    output: string;
  };
  DateTime: {
    input: unknown;
    output: unknown;
  };
  Decimal: {
    input: number;
    output: number;
  };
  DynamicPropertyValue: {
    input: string | number | boolean | null;
    output: string | number | boolean | null;
  };
  Long: {
    input: number;
    output: number;
  };
  ModuleSettingValue: {
    input: string | number | boolean | null;
    output: string | number | boolean | null;
  };
  OptionalDecimal: {
    input: number | undefined;
    output: number | undefined;
  };
  OptionalNullableDecimal: {
    input: number | null | undefined;
    output: number | null | undefined;
  };
  OptionalString: {
    input: string | undefined;
    output: string | undefined;
  };
  PropertyValue: {
    input: string | number | boolean | null;
    output: string | number | boolean | null;
  };
  Seconds: {
    input: number;
    output: number;
  };
};
export type Asset = {
  /** Culture name */
  cultureName?: Maybe<Scalars["String"]["output"]>;
  /** Group of the asset. */
  group?: Maybe<Scalars["String"]["output"]>;
  /** The unique ID of the asset. */
  id: Scalars["String"]["output"];
  /** MimeType of the asset. */
  mimeType?: Maybe<Scalars["String"]["output"]>;
  /** The name of the asset. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** RelativeUrl of the asset. */
  relativeUrl?: Maybe<Scalars["String"]["output"]>;
  /** Size of the asset. */
  size: Scalars["Long"]["output"];
  /** Type id of the asset. */
  typeId: Scalars["String"]["output"];
  /** Url of the asset. */
  url: Scalars["String"]["output"];
};
export type AvailabilityData = {
  /** Available quantity */
  availableQuantity: Scalars["Long"]["output"];
  /** Inventories */
  inventories: Array<InventoryInfo>;
  /** Is active */
  isActive: Scalars["Boolean"]["output"];
  /** Is available */
  isAvailable: Scalars["Boolean"]["output"];
  /** Is buyable */
  isBuyable: Scalars["Boolean"]["output"];
  /** Is estimated */
  isEstimated: Scalars["Boolean"]["output"];
  /** Is in stock */
  isInStock: Scalars["Boolean"]["output"];
  /** Is track inventory */
  isTrackInventory: Scalars["Boolean"]["output"];
};
export type Breadcrumb = {
  /** Id of item the breadcrumb calculated for */
  itemId: Scalars["String"]["output"];
  /** Semantic URL keyword */
  semanticUrl?: Maybe<Scalars["String"]["output"]>;
  /** Full path from catalog */
  seoPath?: Maybe<Scalars["String"]["output"]>;
  /** Name of current breadcrumb */
  title: Scalars["String"]["output"];
  /** Catalog, category or product */
  typeName: Scalars["String"]["output"];
};
export type CartAddressType = {
  /** Address type */
  addressType?: Maybe<Scalars["Int"]["output"]>;
  /** City */
  city?: Maybe<Scalars["String"]["output"]>;
  /** Country code */
  countryCode?: Maybe<Scalars["String"]["output"]>;
  /** Country name */
  countryName?: Maybe<Scalars["String"]["output"]>;
  /** Description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Email */
  email?: Maybe<Scalars["String"]["output"]>;
  /** First name */
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** Id */
  id?: Maybe<Scalars["String"]["output"]>;
  /** Id */
  key?: Maybe<Scalars["String"]["output"]>;
  /** Last name */
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** Line1 */
  line1?: Maybe<Scalars["String"]["output"]>;
  /** Line2 */
  line2?: Maybe<Scalars["String"]["output"]>;
  /** Middle name */
  middleName?: Maybe<Scalars["String"]["output"]>;
  /** Name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Company name */
  organization?: Maybe<Scalars["String"]["output"]>;
  /** Outer id */
  outerId?: Maybe<Scalars["String"]["output"]>;
  /** Phone */
  phone?: Maybe<Scalars["String"]["output"]>;
  /** Postal code */
  postalCode: Scalars["String"]["output"];
  /** Region id */
  regionId?: Maybe<Scalars["String"]["output"]>;
  /** Region name */
  regionName?: Maybe<Scalars["String"]["output"]>;
  /** Zip */
  zip?: Maybe<Scalars["String"]["output"]>;
};
export type CartShipmentItemType = {
  lineItem?: Maybe<LineItemType>;
  /** Quantity */
  quantity: Scalars["Int"]["output"];
};
export type CartType = {
  /** Addresses */
  addresses: Array<CartAddressType>;
  /** Available Gifts */
  availableGifts: Array<GiftItemType>;
  /** Available payment methods */
  availablePaymentMethods: Array<PaymentMethodType>;
  availableShippingMethods: Array<ShippingMethodType>;
  /** Shopping cart channel ID */
  channelId?: Maybe<Scalars["String"]["output"]>;
  /** Shopping cart text comment */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** Coupons */
  coupons: Array<CouponType>;
  /** Currency */
  currency: CurrencyType;
  /** Shopping cart user ID */
  customerId: Scalars["String"]["output"];
  /** Shopping cart user name */
  customerName?: Maybe<Scalars["String"]["output"]>;
  /** Total discount */
  discountTotal: MoneyType;
  /** Total discount with tax */
  discountTotalWithTax: MoneyType;
  /** Discounts */
  discounts: Array<DiscountType>;
  /** Cart dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  /** Total extended price */
  extendedPriceTotal: MoneyType;
  /** Total extended price with tax */
  extendedPriceTotalWithTax: MoneyType;
  /** Shopping cart fee */
  fee: MoneyType;
  /** Total fee */
  feeTotal: MoneyType;
  /** Total fee with tax */
  feeTotalWithTax: MoneyType;
  /** Shopping cart fee with tax */
  feeWithTax: MoneyType;
  /** Gifts */
  gifts: Array<GiftItemType>;
  /** Total handling */
  handlingTotal: MoneyType;
  /** Total handling with tax */
  handlingTotalWithTax: MoneyType;
  /** Has physical products */
  hasPhysicalProducts?: Maybe<Scalars["Boolean"]["output"]>;
  /** Shopping cart ID */
  id: Scalars["String"]["output"];
  /** Displays whether the shopping cart is anonymous */
  isAnonymous: Scalars["Boolean"]["output"];
  /** Displays whether the shopping cart is recurring */
  isRecuring?: Maybe<Scalars["Boolean"]["output"]>;
  /** Items */
  items: Array<LineItemType>;
  /** Item count */
  itemsCount: Scalars["Int"]["output"];
  /** Quantity of items */
  itemsQuantity: Scalars["Int"]["output"];
  /** Shopping cart name */
  name: Scalars["String"]["output"];
  /** Shopping cart organization ID */
  organizationId?: Maybe<Scalars["String"]["output"]>;
  /** Shopping cart organization name */
  organizationName?: Maybe<Scalars["String"]["output"]>;
  /** Payment price */
  paymentPrice: MoneyType;
  /** Payment price with tax */
  paymentPriceWithTax: MoneyType;
  /** Total payment */
  paymentTotal: MoneyType;
  /** Total payment with tax */
  paymentTotalWithTax: MoneyType;
  /** Payments */
  payments: Array<PaymentType>;
  /** Purchase order number */
  purchaseOrderNumber?: Maybe<Scalars["String"]["output"]>;
  /** Shipments */
  shipments: Array<ShipmentType>;
  /** Shipping price */
  shippingPrice: MoneyType;
  /** Shipping price with tax */
  shippingPriceWithTax: MoneyType;
  /** Total shipping */
  shippingTotal: MoneyType;
  /** Total shipping with tax */
  shippingTotalWithTax: MoneyType;
  /** Shopping cart status */
  status?: Maybe<Scalars["String"]["output"]>;
  /** Shopping cart store ID */
  storeId: Scalars["String"]["output"];
  /** Shopping cart subtotal */
  subTotal: MoneyType;
  /** Subtotal discount */
  subTotalDiscount: MoneyType;
  /** Subtotal discount with tax */
  subTotalDiscountWithTax: MoneyType;
  /** Subtotal with tax */
  subTotalWithTax: MoneyType;
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Tax percentage */
  taxPercentRate: Scalars["Decimal"]["output"];
  /** Total tax */
  taxTotal: MoneyType;
  /** Shipping tax type */
  taxType: Scalars["String"]["output"];
  /** Shopping cart total */
  total: MoneyType;
  /** Shopping cart type */
  type?: Maybe<Scalars["String"]["output"]>;
  /** A set of errors in case the cart is invalid */
  validationErrors: Array<ValidationErrorType>;
  /** Shopping cart volumetric weight value */
  volumetricWeight?: Maybe<Scalars["Decimal"]["output"]>;
  /** A set of temporary warnings for a cart user */
  warnings: Array<ValidationErrorType>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars["Decimal"]["output"]>;
  /** Shopping cart weight unit value */
  weightUnit?: Maybe<Scalars["String"]["output"]>;
};
export type CatalogDiscountType = {
  /** Discount amount */
  amount: Scalars["Decimal"]["output"];
  /** Discount amount with tax */
  amountWithTax: Scalars["Decimal"]["output"];
  /** Coupon */
  coupon?: Maybe<Scalars["String"]["output"]>;
  /** Value of discount description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Discount amount in the specified currency */
  moneyAmount: MoneyType;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax: MoneyType;
  promotion?: Maybe<Promotion>;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars["String"]["output"]>;
};
export type Category = {
  /** Breadcrumbs */
  breadcrumbs: Array<Breadcrumb>;
  childCategories: Array<Category>;
  /** SKU of category. */
  code: Scalars["String"]["output"];
  description?: Maybe<CategoryDescriptionType>;
  descriptions: Array<CategoryDescriptionType>;
  /** Have a parent */
  hasParent: Scalars["Boolean"]["output"];
  /** Id of category. */
  id: Scalars["String"]["output"];
  /** Images */
  images: Array<ImageType>;
  /** The category image. */
  imgSrc?: Maybe<Scalars["String"]["output"]>;
  /** Level in hierarchy */
  level: Scalars["Int"]["output"];
  /** Name of category. */
  name: Scalars["String"]["output"];
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars["String"]["output"]>;
  /** Outlines */
  outlines: Array<OutlineType>;
  parent?: Maybe<Category>;
  /** Category path in to the requested catalog  (all parent categories names concatenated. E.g. (parent1/parent2)) */
  path?: Maybe<Scalars["String"]["output"]>;
  /** The category priority. */
  priority: Scalars["Int"]["output"];
  properties: Array<Property>;
  /** Request related SEO info */
  seoInfo: SeoInfo;
  /** Request related slug for category */
  slug?: Maybe<Scalars["String"]["output"]>;
};
export type CategoryDescriptionType = {
  /** Description text. */
  content?: Maybe<Scalars["String"]["output"]>;
  /** Description type. */
  descriptionType?: Maybe<Scalars["String"]["output"]>;
  /** Description ID. */
  id: Scalars["String"]["output"];
  /** Description language code. */
  languageCode?: Maybe<Scalars["String"]["output"]>;
};
export type CommonVendor = {
  /** Vendor ID */
  id: Scalars["String"]["output"];
  /** Vendor name */
  name: Scalars["String"]["output"];
  /** Vendor rating */
  rating?: Maybe<Rating>;
};
export type CouponType = {
  /** Coupon code */
  code?: Maybe<Scalars["String"]["output"]>;
  /** Is coupon was applied successfully */
  isAppliedSuccessfully: Scalars["Boolean"]["output"];
};
export type CurrencyType = {
  /** Currency code may be used ISO 4217 */
  code: Scalars["String"]["output"];
  /** Currency English name */
  cultureName: Scalars["String"]["output"];
  /** Currency custom formatting */
  customFormatting?: Maybe<Scalars["String"]["output"]>;
  /** Currency English name */
  englishName: Scalars["String"]["output"];
  /** Exchange rate */
  exchangeRate: Scalars["Decimal"]["output"];
  /** Symbol */
  symbol: Scalars["String"]["output"];
};
export type CustomerOrderType = {
  addresses: Array<OrderAddressType>;
  /** Available payment methods */
  availablePaymentMethods: Array<OrderPaymentMethodType>;
  cancelReason?: Maybe<Scalars["String"]["output"]>;
  cancelledDate?: Maybe<Scalars["DateTime"]["output"]>;
  channelId?: Maybe<Scalars["String"]["output"]>;
  comment?: Maybe<Scalars["String"]["output"]>;
  coupons: Array<Scalars["String"]["output"]>;
  createdBy?: Maybe<Scalars["String"]["output"]>;
  createdDate: Scalars["DateTime"]["output"];
  currency: CurrencyType;
  customerId: Scalars["String"]["output"];
  customerName?: Maybe<Scalars["String"]["output"]>;
  discountAmount: MoneyType;
  discountTotal: MoneyType;
  discountTotalWithTax: MoneyType;
  discounts: Array<OrderDiscountType>;
  /** Customer order dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  employeeId?: Maybe<Scalars["String"]["output"]>;
  employeeName?: Maybe<Scalars["String"]["output"]>;
  fee: MoneyType;
  feeTotal: MoneyType;
  feeTotalWithTax: MoneyType;
  feeWithTax: MoneyType;
  id: Scalars["String"]["output"];
  inPayments: Array<PaymentInType>;
  isApproved: Scalars["Boolean"]["output"];
  isCancelled: Scalars["Boolean"]["output"];
  isPrototype: Scalars["Boolean"]["output"];
  items: Array<OrderLineItemType>;
  languageCode?: Maybe<Scalars["String"]["output"]>;
  modifiedBy?: Maybe<Scalars["String"]["output"]>;
  modifiedDate?: Maybe<Scalars["DateTime"]["output"]>;
  number: Scalars["String"]["output"];
  objectType: Scalars["String"]["output"];
  operationType: Scalars["String"]["output"];
  organizationId?: Maybe<Scalars["String"]["output"]>;
  organizationName?: Maybe<Scalars["String"]["output"]>;
  outerId?: Maybe<Scalars["String"]["output"]>;
  parentOperationId?: Maybe<Scalars["String"]["output"]>;
  paymentDiscountTotal: MoneyType;
  paymentDiscountTotalWithTax: MoneyType;
  paymentSubTotal: MoneyType;
  paymentSubTotalWithTax: MoneyType;
  paymentTaxTotal: MoneyType;
  paymentTotal: MoneyType;
  paymentTotalWithTax: MoneyType;
  purchaseOrderNumber?: Maybe<Scalars["String"]["output"]>;
  shipments: Array<OrderShipmentType>;
  shippingDiscountTotal: MoneyType;
  shippingDiscountTotalWithTax: MoneyType;
  shippingSubTotal: MoneyType;
  shippingSubTotalWithTax: MoneyType;
  shippingTaxTotal: MoneyType;
  shippingTotal: MoneyType;
  shippingTotalWithTax: MoneyType;
  shoppingCartId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  statusDisplayValue?: Maybe<Scalars["String"]["output"]>;
  storeId: Scalars["String"]["output"];
  storeName?: Maybe<Scalars["String"]["output"]>;
  subTotal: MoneyType;
  subTotalDiscount: MoneyType;
  subTotalDiscountWithTax: MoneyType;
  subTotalTaxTotal: MoneyType;
  subTotalWithTax: MoneyType;
  subscriptionId?: Maybe<Scalars["String"]["output"]>;
  subscriptionNumber?: Maybe<Scalars["String"]["output"]>;
  taxDetails: Array<OrderTaxDetailType>;
  taxPercentRate: Scalars["Decimal"]["output"];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars["String"]["output"]>;
  total: MoneyType;
};
export type DescriptionType = {
  /** Description text. */
  content?: Maybe<Scalars["String"]["output"]>;
  /** Description ID. */
  id: Scalars["String"]["output"];
  /** Description language code. */
  languageCode?: Maybe<Scalars["String"]["output"]>;
  /** Description type. */
  reviewType?: Maybe<Scalars["String"]["output"]>;
};
/** A connection from an object to a list of objects of type `DictionaryItem`. */
export type DictionaryItemConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<DictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<DictionaryItemType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};
/** An edge in a connection from an object to another object of type `DictionaryItem`. */
export type DictionaryItemEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<DictionaryItemType>;
};
export type DictionaryItemType = {
  /** Id */
  id: Scalars["String"]["output"];
  /** Localized dictionary item value */
  label?: Maybe<Scalars["String"]["output"]>;
  /** Name */
  name: Scalars["String"]["output"];
};
export type DiscountType = {
  /** Discount amount */
  amount: Scalars["Decimal"]["output"];
  /** Discount amount with tax */
  amountWithTax: Scalars["Decimal"]["output"];
  /** Coupon */
  coupon?: Maybe<Scalars["String"]["output"]>;
  /** Value of discount description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Discount amount in the specified currency */
  moneyAmount: MoneyType;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax: MoneyType;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars["String"]["output"]>;
  /** Name of the promotion */
  promotionName?: Maybe<Scalars["String"]["output"]>;
};
export type DynamicPropertyType = {
  dictionaryItems?: Maybe<DictionaryItemConnection>;
  /** The order for the dynamic property to display */
  displayOrder?: Maybe<Scalars["Int"]["output"]>;
  /** Value type */
  dynamicPropertyValueType: DynamicPropertyValueTypes;
  /** Id */
  id: Scalars["String"]["output"];
  /** Is dynamic property value an array */
  isArray: Scalars["Boolean"]["output"];
  /** Is dynamic property value a dictionary */
  isDictionary: Scalars["Boolean"]["output"];
  /** Is dynamic property value multilingual */
  isMultilingual: Scalars["Boolean"]["output"];
  /** Is dynamic property value required */
  isRequired: Scalars["Boolean"]["output"];
  /** Localized property name */
  label?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  /** Object type */
  objectType: Scalars["String"]["output"];
  /**
   * Value type
   * @deprecated Use dynamicPropertyValueType instead
   */
  valueType: Scalars["String"]["output"];
};
export type DynamicPropertyValueType = {
  /** Associated dictionary item */
  dictionaryItem?: Maybe<DictionaryItemType>;
  /** Associated dynamic property */
  dynamicProperty?: Maybe<DynamicPropertyType>;
  /** Value type */
  dynamicPropertyValueType: DynamicPropertyValueTypes;
  /** Property name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Property value */
  value?: Maybe<Scalars["DynamicPropertyValue"]["output"]>;
  /** Value type */
  valueType: Scalars["String"]["output"];
};
declare enum DynamicPropertyValueTypes {
  Boolean = "BOOLEAN",
  DateTime = "DATE_TIME",
  Decimal = "DECIMAL",
  Html = "HTML",
  Image = "IMAGE",
  Integer = "INTEGER",
  LongText = "LONG_TEXT",
  ShortText = "SHORT_TEXT",
  Undefined = "UNDEFINED",
}
export type ErrorParameterType = {
  /** key */
  key: Scalars["String"]["output"];
  /** Value */
  value: Scalars["String"]["output"];
};
export type GiftItemType = {
  /** Product category ID */
  categoryId?: Maybe<Scalars["String"]["output"]>;
  /** Artificial ID for this value object */
  id: Scalars["String"]["output"];
  /** Value of reward image absolute URL */
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  /** Line item ID in case there is a gift in the cart. If there is no gift, it stays null */
  lineItemId?: Maybe<Scalars["String"]["output"]>;
  /** Measurement unit */
  measureUnit?: Maybe<Scalars["String"]["output"]>;
  /** Name of the reward */
  name: Scalars["String"]["output"];
  product?: Maybe<Product>;
  /** Product ID */
  productId?: Maybe<Scalars["String"]["output"]>;
  /** Promotion ID */
  promotionId: Scalars["String"]["output"];
  /** Number of gifts in the reward */
  quantity: Scalars["Int"]["output"];
};
export type ImageType = {
  /** Culture name */
  cultureName?: Maybe<Scalars["String"]["output"]>;
  /** Image group */
  group?: Maybe<Scalars["String"]["output"]>;
  /** Image ID */
  id: Scalars["String"]["output"];
  /** Image name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Image relative URL */
  relativeUrl?: Maybe<Scalars["String"]["output"]>;
  /** Sort order */
  sortOrder: Scalars["Int"]["output"];
  /** Image URL */
  url: Scalars["String"]["output"];
};
export type InventoryInfo = {
  /** Allow backorder */
  allowBackorder: Scalars["Boolean"]["output"];
  /** Allow preorder */
  allowPreorder: Scalars["Boolean"]["output"];
  /** Backorder availability date */
  backorderAvailabilityDate?: Maybe<Scalars["DateTime"]["output"]>;
  fulfillmentCenterId: Scalars["String"]["output"];
  fulfillmentCenterName: Scalars["String"]["output"];
  /** Inventory in stock quantity */
  inStockQuantity: Scalars["Long"]["output"];
  /** Preorder availability date */
  preorderAvailabilityDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** Inventory reserved quantity */
  reservedQuantity: Scalars["Long"]["output"];
};
export type LineItemType = {
  /** Catalog ID value */
  catalogId: Scalars["String"]["output"];
  /** Category ID value */
  categoryId?: Maybe<Scalars["String"]["output"]>;
  /** Line item create date */
  createdDate: Scalars["DateTime"]["output"];
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Total discount */
  discountTotal: MoneyType;
  /** Total discount with tax */
  discountTotalWithTax: MoneyType;
  /** Discounts */
  discounts: Array<DiscountType>;
  /** Cart line item dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  /** Extended price */
  extendedPrice: MoneyType;
  /** Extended price with tax */
  extendedPriceWithTax: MoneyType;
  /** Line item fulfillment center ID value */
  fulfillmentCenterId?: Maybe<Scalars["String"]["output"]>;
  /** Line item fulfillment center name value */
  fulfillmentCenterName?: Maybe<Scalars["String"]["output"]>;
  /** Height value */
  height?: Maybe<Scalars["Decimal"]["output"]>;
  /** Line item ID */
  id: Scalars["String"]["output"];
  /** Value of line item image absolute URL */
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  /** In stock quantity */
  inStockQuantity: Scalars["Int"]["output"];
  /** flag of line item is a gift */
  isGift: Scalars["Boolean"]["output"];
  /** Shows whether this is read-only */
  isReadOnly: Scalars["Boolean"]["output"];
  /** Shows whether the line item is recurring */
  isReccuring: Scalars["Boolean"]["output"];
  /** Shows whether this is valid */
  isValid: Scalars["Boolean"]["output"];
  /** Culture name in the ISO 3166-1 alpha-3 format */
  languageCode?: Maybe<Scalars["String"]["output"]>;
  /** Length value */
  length?: Maybe<Scalars["Decimal"]["output"]>;
  /** List price */
  listPrice: MoneyType;
  /** List price with tax */
  listPriceWithTax: MoneyType;
  /** Measurement unit value */
  measureUnit?: Maybe<Scalars["String"]["output"]>;
  /** Line item name value */
  name: Scalars["String"]["output"];
  /** Line item comment */
  note?: Maybe<Scalars["String"]["output"]>;
  /** Line item quantity value */
  objectType: Scalars["String"]["output"];
  /** Placed price */
  placedPrice: MoneyType;
  /** Placed price with tax */
  placedPriceWithTax: MoneyType;
  product?: Maybe<Product>;
  /** Product ID value */
  productId: Scalars["String"]["output"];
  /** Product outer Id */
  productOuterId?: Maybe<Scalars["String"]["output"]>;
  /** Product type: Physical, Digital, or Subscription */
  productType?: Maybe<Scalars["String"]["output"]>;
  /** Line item quantity value */
  quantity: Scalars["Int"]["output"];
  /** Requirement for line item shipping */
  requiredShipping: Scalars["Boolean"]["output"];
  /** Sale price */
  salePrice: MoneyType;
  /** Sale price with tax */
  salePriceWithTax: MoneyType;
  /** Shows whether the line item is selected for buying */
  selectedForCheckout: Scalars["Boolean"]["output"];
  /** Line item shipping method code value */
  shipmentMethodCode?: Maybe<Scalars["String"]["output"]>;
  /** Product SKU value */
  sku: Scalars["String"]["output"];
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Total shipping tax amount value */
  taxPercentRate: Scalars["Decimal"]["output"];
  /** Tax total */
  taxTotal: MoneyType;
  /** Shipping tax type value */
  taxType?: Maybe<Scalars["String"]["output"]>;
  /** Value of line item thumbnail image absolute URL */
  thumbnailImageUrl?: Maybe<Scalars["String"]["output"]>;
  /** Validation errors */
  validationErrors: Array<ValidationErrorType>;
  vendor?: Maybe<CommonVendor>;
  /** Volumetric weight value */
  volumetricWeight?: Maybe<Scalars["Decimal"]["output"]>;
  /** Warehouse location */
  warehouseLocation?: Maybe<Scalars["String"]["output"]>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars["Decimal"]["output"]>;
  /** Weight unit value */
  weightUnit?: Maybe<Scalars["String"]["output"]>;
  /** Width value */
  width?: Maybe<Scalars["Decimal"]["output"]>;
};
export type MoneyType = {
  /** A decimal with the amount rounded to the significant number of decimal digits. */
  amount: Scalars["Decimal"]["output"];
  /** Currency type */
  currency: CurrencyType;
  /** Number of decimal digits for the associated currency. */
  decimalDigits: Scalars["Int"]["output"];
  /** Formatted amount. */
  formattedAmount: Scalars["String"]["output"];
  /** Formatted amount without currency. */
  formattedAmountWithoutCurrency: Scalars["String"]["output"];
  /** Formatted amount without point. */
  formattedAmountWithoutPoint: Scalars["String"]["output"];
  /** Formatted amount without point and currency. */
  formattedAmountWithoutPointAndCurrency: Scalars["String"]["output"];
};
export type OrderAddressType = {
  /** Address type */
  addressType?: Maybe<Scalars["Int"]["output"]>;
  /** City */
  city?: Maybe<Scalars["String"]["output"]>;
  /** Country code */
  countryCode?: Maybe<Scalars["String"]["output"]>;
  /** Country name */
  countryName?: Maybe<Scalars["String"]["output"]>;
  /** Email */
  email?: Maybe<Scalars["String"]["output"]>;
  /** First name */
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** Id */
  id?: Maybe<Scalars["String"]["output"]>;
  /** Id */
  key?: Maybe<Scalars["String"]["output"]>;
  /** Last name */
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** Line1 */
  line1?: Maybe<Scalars["String"]["output"]>;
  /** Line2 */
  line2?: Maybe<Scalars["String"]["output"]>;
  /** Middle name */
  middleName?: Maybe<Scalars["String"]["output"]>;
  /** Name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Company name */
  organization?: Maybe<Scalars["String"]["output"]>;
  /** Outer id */
  outerId?: Maybe<Scalars["String"]["output"]>;
  /** Phone */
  phone?: Maybe<Scalars["String"]["output"]>;
  /** Postal code */
  postalCode: Scalars["String"]["output"];
  /** Region id */
  regionId?: Maybe<Scalars["String"]["output"]>;
  /** Region name */
  regionName?: Maybe<Scalars["String"]["output"]>;
  /** Zip */
  zip?: Maybe<Scalars["String"]["output"]>;
};
export type OrderDiscountType = {
  /** Order discount amount */
  amount: MoneyType;
  coupon?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  promotionId?: Maybe<Scalars["String"]["output"]>;
  promotionName?: Maybe<Scalars["String"]["output"]>;
};
export type OrderLineItemType = {
  cancelReason?: Maybe<Scalars["String"]["output"]>;
  cancelledDate?: Maybe<Scalars["DateTime"]["output"]>;
  catalogId: Scalars["String"]["output"];
  categoryId?: Maybe<Scalars["String"]["output"]>;
  comment?: Maybe<Scalars["String"]["output"]>;
  currency: CurrencyType;
  discountAmount: MoneyType;
  discountAmountWithTax: MoneyType;
  discountTotal: MoneyType;
  discountTotalWithTax: MoneyType;
  discounts: Array<OrderDiscountType>;
  /** Customer order Line item dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  extendedPrice: MoneyType;
  extendedPriceWithTax: MoneyType;
  fulfillmentCenterId?: Maybe<Scalars["String"]["output"]>;
  fulfillmentCenterName?: Maybe<Scalars["String"]["output"]>;
  fulfillmentLocationCode?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Decimal"]["output"]>;
  id: Scalars["String"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  isCancelled: Scalars["Boolean"]["output"];
  isGift?: Maybe<Scalars["Boolean"]["output"]>;
  length?: Maybe<Scalars["Decimal"]["output"]>;
  measureUnit?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  objectType: Scalars["String"]["output"];
  outerId?: Maybe<Scalars["String"]["output"]>;
  placedPrice: MoneyType;
  placedPriceWithTax: MoneyType;
  price: MoneyType;
  priceId?: Maybe<Scalars["String"]["output"]>;
  priceWithTax: MoneyType;
  product?: Maybe<Product>;
  productId: Scalars["String"]["output"];
  productOuterId?: Maybe<Scalars["String"]["output"]>;
  productType?: Maybe<Scalars["String"]["output"]>;
  quantity: Scalars["Int"]["output"];
  reserveQuantity: Scalars["Int"]["output"];
  shippingMethodCode?: Maybe<Scalars["String"]["output"]>;
  sku: Scalars["String"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  statusDisplayValue?: Maybe<Scalars["String"]["output"]>;
  taxDetails: Array<OrderTaxDetailType>;
  taxPercentRate: Scalars["Decimal"]["output"];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars["String"]["output"]>;
  vendor?: Maybe<CommonVendor>;
  weight?: Maybe<Scalars["Decimal"]["output"]>;
  weightUnit?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Decimal"]["output"]>;
};
export type OrderPaymentMethodType = {
  code: Scalars["String"]["output"];
  currency: CurrencyType;
  description?: Maybe<Scalars["String"]["output"]>;
  discountAmount: MoneyType;
  discountAmountWithTax: MoneyType;
  isActive: Scalars["Boolean"]["output"];
  isAvailableForPartial: Scalars["Boolean"]["output"];
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  paymentMethodGroupType: Scalars["Int"]["output"];
  paymentMethodType: Scalars["Int"]["output"];
  price: MoneyType;
  priceWithTax: MoneyType;
  priority: Scalars["Int"]["output"];
  storeId?: Maybe<Scalars["String"]["output"]>;
  taxDetails?: Maybe<Array<OrderTaxDetailType>>;
  taxPercentRate: Scalars["Decimal"]["output"];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars["String"]["output"]>;
  total: MoneyType;
  totalWithTax: MoneyType;
  typeName: Scalars["String"]["output"];
};
export type OrderShipmentItemType = {
  barCode?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  lineItem?: Maybe<OrderLineItemType>;
  lineItemId?: Maybe<Scalars["String"]["output"]>;
  outerId?: Maybe<Scalars["String"]["output"]>;
  quantity: Scalars["Int"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
};
export type OrderShipmentPackageType = {
  barCode?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Decimal"]["output"]>;
  id: Scalars["String"]["output"];
  items: Array<OrderShipmentItemType>;
  length?: Maybe<Scalars["Decimal"]["output"]>;
  measureUnit?: Maybe<Scalars["String"]["output"]>;
  packageType?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["Decimal"]["output"]>;
  weightUnit?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Decimal"]["output"]>;
};
export type OrderShipmentType = {
  cancelReason?: Maybe<Scalars["String"]["output"]>;
  cancelledDate?: Maybe<Scalars["DateTime"]["output"]>;
  comment?: Maybe<Scalars["String"]["output"]>;
  currency: CurrencyType;
  customerOrderId?: Maybe<Scalars["String"]["output"]>;
  deliveryAddress?: Maybe<OrderAddressType>;
  deliveryDate?: Maybe<Scalars["DateTime"]["output"]>;
  discountAmount: MoneyType;
  discountAmountWithTax: MoneyType;
  discounts: Array<OrderDiscountType>;
  /** Customer order Shipment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  employeeId?: Maybe<Scalars["String"]["output"]>;
  employeeName?: Maybe<Scalars["String"]["output"]>;
  fee: MoneyType;
  feeWithTax: MoneyType;
  fulfillmentCenterId?: Maybe<Scalars["String"]["output"]>;
  fulfillmentCenterName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Decimal"]["output"]>;
  id: Scalars["String"]["output"];
  inPayments: Array<PaymentInType>;
  isApproved: Scalars["Boolean"]["output"];
  isCancelled: Scalars["Boolean"]["output"];
  items: Array<OrderShipmentItemType>;
  length?: Maybe<Scalars["Decimal"]["output"]>;
  measureUnit?: Maybe<Scalars["String"]["output"]>;
  number: Scalars["String"]["output"];
  objectType: Scalars["String"]["output"];
  operationType: Scalars["String"]["output"];
  organizationId?: Maybe<Scalars["String"]["output"]>;
  organizationName?: Maybe<Scalars["String"]["output"]>;
  outerId?: Maybe<Scalars["String"]["output"]>;
  packages: Array<OrderShipmentPackageType>;
  parentOperationId?: Maybe<Scalars["String"]["output"]>;
  price: MoneyType;
  priceWithTax: MoneyType;
  shipmentMethodCode?: Maybe<Scalars["String"]["output"]>;
  shipmentMethodOption?: Maybe<Scalars["String"]["output"]>;
  shippingMethod?: Maybe<OrderShippingMethodType>;
  status?: Maybe<Scalars["String"]["output"]>;
  statusDisplayValue?: Maybe<Scalars["String"]["output"]>;
  taxDetails: Array<OrderTaxDetailType>;
  taxPercentRate: Scalars["Decimal"]["output"];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars["String"]["output"]>;
  total: MoneyType;
  totalWithTax: MoneyType;
  trackingNumber?: Maybe<Scalars["String"]["output"]>;
  trackingUrl?: Maybe<Scalars["String"]["output"]>;
  vendor?: Maybe<CommonVendor>;
  weight?: Maybe<Scalars["Decimal"]["output"]>;
  weightUnit?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Decimal"]["output"]>;
};
export type OrderShippingMethodType = {
  code: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  isActive: Scalars["Boolean"]["output"];
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  priority: Scalars["Int"]["output"];
  storeId?: Maybe<Scalars["String"]["output"]>;
  taxType?: Maybe<Scalars["String"]["output"]>;
  typeName?: Maybe<Scalars["String"]["output"]>;
};
export type OrderTaxDetailType = {
  amount: MoneyType;
  name: Scalars["String"]["output"];
  rate: MoneyType;
};
export type OutlineItemType = {
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  /** SEO info */
  seoInfos?: Maybe<Array<SeoInfo>>;
  seoObjectType: Scalars["String"]["output"];
};
export type OutlineType = {
  /** Outline items */
  items?: Maybe<Array<OutlineItemType>>;
};
/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};
export type PaymentInType = {
  authorizedDate?: Maybe<Scalars["DateTime"]["output"]>;
  billingAddress?: Maybe<OrderAddressType>;
  cancelReason?: Maybe<Scalars["String"]["output"]>;
  cancelledDate?: Maybe<Scalars["DateTime"]["output"]>;
  capturedDate?: Maybe<Scalars["DateTime"]["output"]>;
  comment?: Maybe<Scalars["String"]["output"]>;
  createdBy?: Maybe<Scalars["String"]["output"]>;
  createdDate: Scalars["DateTime"]["output"];
  currency: CurrencyType;
  customerId: Scalars["String"]["output"];
  customerName?: Maybe<Scalars["String"]["output"]>;
  /** Customer order Payment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  gatewayCode?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  incomingDate?: Maybe<Scalars["DateTime"]["output"]>;
  isApproved: Scalars["Boolean"]["output"];
  isCancelled: Scalars["Boolean"]["output"];
  modifiedBy?: Maybe<Scalars["String"]["output"]>;
  modifiedDate?: Maybe<Scalars["DateTime"]["output"]>;
  number: Scalars["String"]["output"];
  objectType: Scalars["String"]["output"];
  operationType: Scalars["String"]["output"];
  /** Associated Order */
  order: CustomerOrderType;
  orderId?: Maybe<Scalars["String"]["output"]>;
  organizationId?: Maybe<Scalars["String"]["output"]>;
  organizationName?: Maybe<Scalars["String"]["output"]>;
  outerId?: Maybe<Scalars["String"]["output"]>;
  parentOperationId?: Maybe<Scalars["String"]["output"]>;
  paymentMethod?: Maybe<OrderPaymentMethodType>;
  price: MoneyType;
  purpose?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  statusDisplayValue?: Maybe<Scalars["String"]["output"]>;
  sum: MoneyType;
  tax: MoneyType;
  transactions: Array<PaymentTransactionType>;
  vendor?: Maybe<CommonVendor>;
  voidedDate?: Maybe<Scalars["DateTime"]["output"]>;
};
export type PaymentMethodType = {
  /** Value of payment gateway code */
  code: Scalars["String"]["output"];
  /** Currency */
  currency: CurrencyType;
  /** Payment method description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Is payment method available for partial payments */
  isAvailableForPartial: Scalars["Boolean"]["output"];
  /** Value of payment method logo absolute URL */
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  /** Value of payment method name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Value of payment group type */
  paymentMethodGroupType: Scalars["String"]["output"];
  /** Value of payment method type */
  paymentMethodType: Scalars["String"]["output"];
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Value of payment method priority */
  priority: Scalars["Int"]["output"];
  /** Tax details */
  taxDetails?: Maybe<Array<TaxDetailType>>;
  /** Tax percent rate */
  taxPercentRate: Scalars["Decimal"]["output"];
  /** Tax total */
  taxTotal: MoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars["String"]["output"]>;
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
};
export type PaymentTransactionType = {
  amount: MoneyType;
  gatewayIpAddress?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  isProcessed: Scalars["Boolean"]["output"];
  note?: Maybe<Scalars["String"]["output"]>;
  processAttemptCount: Scalars["Int"]["output"];
  processError?: Maybe<Scalars["String"]["output"]>;
  processedDate?: Maybe<Scalars["DateTime"]["output"]>;
  requestData?: Maybe<Scalars["String"]["output"]>;
  responseCode?: Maybe<Scalars["String"]["output"]>;
  responseData?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};
export type PaymentType = {
  /** Amount */
  amount: MoneyType;
  /** Billing address */
  billingAddress?: Maybe<CartAddressType>;
  /** Text comment */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** Currency */
  currency: CurrencyType;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Discounts */
  discounts: Array<Maybe<DiscountType>>;
  /** Cart payment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  /** Payment Id */
  id: Scalars["String"]["output"];
  /** Value of payment outer id */
  outerId?: Maybe<Scalars["String"]["output"]>;
  /** Value of payment gateway code */
  paymentGatewayCode?: Maybe<Scalars["String"]["output"]>;
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  purpose?: Maybe<Scalars["String"]["output"]>;
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Tax percent rate */
  taxPercentRate: Scalars["Decimal"]["output"];
  /** Tax total */
  taxTotal: MoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars["String"]["output"]>;
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
  vendor?: Maybe<CommonVendor>;
};
export type PriceType = {
  /** Actual price */
  actual: MoneyType;
  /** Actual price with tax */
  actualWithTax: MoneyType;
  /** Currency */
  currency: Scalars["String"]["output"];
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  discountPercent: Scalars["Decimal"]["output"];
  /** Discounts */
  discounts: Array<CatalogDiscountType>;
  /** End date */
  endDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** Price list */
  list: MoneyType;
  /** Price list with tax */
  listWithTax: MoneyType;
  /** The product min qty */
  minQuantity?: Maybe<Scalars["Int"]["output"]>;
  /** The product price list */
  pricelistId?: Maybe<Scalars["String"]["output"]>;
  /** Sale price */
  sale: MoneyType;
  /** Sale price with tax */
  saleWithTax: MoneyType;
  /** Start date */
  startDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** Tier prices */
  tierPrices: Array<TierPriceType>;
  /**
   * Valid from
   * @deprecated startDate
   */
  validFrom?: Maybe<Scalars["DateTime"]["output"]>;
  /**
   * Valid until
   * @deprecated endDate
   */
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
};
/** Products are the sellable goods in an e-commerce project. */
export type Product = {
  /** Assets */
  assets: Array<Asset>;
  associations?: Maybe<ProductAssociationConnection>;
  /** Product availability data */
  availabilityData: AvailabilityData;
  /** Get brandName for product. */
  brandName?: Maybe<Scalars["String"]["output"]>;
  /** Breadcrumbs */
  breadcrumbs: Array<Breadcrumb>;
  /** The unique ID of the catalog */
  catalogId?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Category>;
  /** The product SKU. */
  code: Scalars["String"]["output"];
  description?: Maybe<DescriptionType>;
  descriptions: Array<DescriptionType>;
  /** Global Trade Item Number */
  gtin?: Maybe<Scalars["String"]["output"]>;
  hasVariations: Scalars["Boolean"]["output"];
  /** The unique ID of the product. */
  id: Scalars["String"]["output"];
  /** Product images */
  images: Array<ImageType>;
  /** The product main image URL. */
  imgSrc?: Maybe<Scalars["String"]["output"]>;
  /** Product added at least in one wishlist */
  inWishlist: Scalars["Boolean"]["output"];
  keyProperties: Array<Property>;
  masterVariation?: Maybe<VariationType>;
  /** Max. quantity */
  maxQuantity?: Maybe<Scalars["Int"]["output"]>;
  /** Min. quantity */
  minQuantity?: Maybe<Scalars["Int"]["output"]>;
  /** Minimim product variation price */
  minVariationPrice?: Maybe<PriceType>;
  /** The name of the product. */
  name: Scalars["String"]["output"];
  /** The outer identifier */
  outerId?: Maybe<Scalars["String"]["output"]>;
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars["String"]["output"]>;
  /** Outlines */
  outlines: Array<OutlineType>;
  /** Product price */
  price: PriceType;
  /** Product prices */
  prices: Array<PriceType>;
  /** The type of product */
  productType?: Maybe<Scalars["String"]["output"]>;
  properties: Array<Property>;
  /** Request related SEO info */
  seoInfo: SeoInfo;
  /** Request related slug for product */
  slug?: Maybe<Scalars["String"]["output"]>;
  variations: Array<VariationType>;
  /** Product vendor */
  vendor?: Maybe<CommonVendor>;
  videos?: Maybe<VideoConnection>;
  /** List of wishlist ID with this product */
  wishlistIds: Array<Maybe<Scalars["String"]["output"]>>;
};
/** product association. */
export type ProductAssociation = {
  associatedObjectId?: Maybe<Scalars["String"]["output"]>;
  associatedObjectType?: Maybe<Scalars["String"]["output"]>;
  priority: Scalars["Int"]["output"];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};
/** A connection from an object to a list of objects of type `ProductAssociation`. */
export type ProductAssociationConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProductAssociationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ProductAssociation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};
/** An edge in a connection from an object to another object of type `ProductAssociation`. */
export type ProductAssociationEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductAssociation>;
};
/** Represents promotion object */
export type Promotion = {
  /** Promotion description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The unique ID of the promotion. */
  id: Scalars["String"]["output"];
  /** The name of the promotion */
  name: Scalars["String"]["output"];
  /** Promotion type */
  type?: Maybe<Scalars["String"]["output"]>;
};
/** Products attributes. */
export type Property = {
  /** The display order of the property. */
  displayOrder?: Maybe<Scalars["Int"]["output"]>;
  /** Is property hidden. */
  hidden: Scalars["Boolean"]["output"];
  /** The unique ID of the property. */
  id: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  /** Is property has multiple values. */
  multivalue: Scalars["Boolean"]["output"];
  /** The name of the property. */
  name: Scalars["String"]["output"];
  /** @deprecated Use propertyDictionaryItems instead. */
  propertyDictItems?: Maybe<PropertyDictionaryItemConnection>;
  propertyDictionaryItems?: Maybe<PropertyDictionaryItemConnection>;
  propertyType: PropertyType;
  /** ValueType of the property. */
  propertyValueType: PropertyValueTypes;
  /** @deprecated Use propertyType instead. */
  type: Scalars["String"]["output"];
  value?: Maybe<Scalars["PropertyValue"]["output"]>;
  valueId?: Maybe<Scalars["String"]["output"]>;
  /**
   * ValueType of the property.
   * @deprecated Use propertyValueType instead.
   */
  valueType: Scalars["String"]["output"];
};
/** Represents property dictionary item */
export type PropertyDictionaryItem = {
  /** The unique ID of the property dictionary item. */
  id: Scalars["String"]["output"];
  /** Value order. */
  sortOrder: Scalars["Int"]["output"];
  /** Value alias. */
  value?: Maybe<Scalars["String"]["output"]>;
};
/** A connection from an object to a list of objects of type `PropertyDictionaryItem`. */
export type PropertyDictionaryItemConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PropertyDictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PropertyDictionaryItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};
/** An edge in a connection from an object to another object of type `PropertyDictionaryItem`. */
export type PropertyDictionaryItemEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PropertyDictionaryItem>;
};
declare enum PropertyType {
  Catalog = "CATALOG",
  Category = "CATEGORY",
  Product = "PRODUCT",
  Variation = "VARIATION",
}
declare enum PropertyValueTypes {
  Boolean = "BOOLEAN",
  DateTime = "DATE_TIME",
  GeoPoint = "GEO_POINT",
  Integer = "INTEGER",
  LongText = "LONG_TEXT",
  Number = "NUMBER",
  ShortText = "SHORT_TEXT",
}
export type Rating = {
  /** Total count of customer reviews */
  reviewCount: Scalars["Int"]["output"];
  /** Average rating */
  value: Scalars["Decimal"]["output"];
};
export type SeoInfo = {
  id: Scalars["String"]["output"];
  imageAltDescription?: Maybe<Scalars["String"]["output"]>;
  isActive: Scalars["Boolean"]["output"];
  languageCode?: Maybe<Scalars["String"]["output"]>;
  metaDescription?: Maybe<Scalars["String"]["output"]>;
  metaKeywords?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  objectId: Scalars["String"]["output"];
  objectType: Scalars["String"]["output"];
  pageTitle?: Maybe<Scalars["String"]["output"]>;
  semanticUrl: Scalars["String"]["output"];
  storeId?: Maybe<Scalars["String"]["output"]>;
};
export type ShipmentType = {
  /** Text comment */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** Currency */
  currency: CurrencyType;
  /** Delivery address */
  deliveryAddress?: Maybe<CartAddressType>;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Discounts */
  discounts: Array<DiscountType>;
  /** Cart shipment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  /** Fee */
  fee: MoneyType;
  /** Fee with tax */
  feeWithTax: MoneyType;
  /** Fulfillment center id */
  fulfillmentCenterId?: Maybe<Scalars["String"]["output"]>;
  /** Value of height */
  height?: Maybe<Scalars["Decimal"]["output"]>;
  /** Shipment Id */
  id: Scalars["String"]["output"];
  /** Items */
  items: Array<CartShipmentItemType>;
  /** Value of length */
  length?: Maybe<Scalars["Decimal"]["output"]>;
  /** Value of measurement units */
  measureUnit?: Maybe<Scalars["String"]["output"]>;
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Shipment method code */
  shipmentMethodCode?: Maybe<Scalars["String"]["output"]>;
  /** Shipment method option */
  shipmentMethodOption?: Maybe<Scalars["String"]["output"]>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Tax percent rate */
  taxPercentRate: Scalars["Decimal"]["output"];
  /** Tax total */
  taxTotal: MoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars["String"]["output"]>;
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
  vendor?: Maybe<CommonVendor>;
  /** Value of volumetric weight */
  volumetricWeight?: Maybe<Scalars["Decimal"]["output"]>;
  /** Value of weight */
  weight?: Maybe<Scalars["Decimal"]["output"]>;
  /** Value of weight unit */
  weightUnit?: Maybe<Scalars["String"]["output"]>;
  /** Value of width */
  width?: Maybe<Scalars["Decimal"]["output"]>;
};
export type ShippingMethodType = {
  /** Value of shipping gateway code */
  code: Scalars["String"]["output"];
  /** Currency */
  currency: CurrencyType;
  /** Shipping method description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  id: Scalars["String"]["output"];
  /** Value of shipping method logo absolute URL */
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  /** Shipping method name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Value of shipping method option description */
  optionDescription?: Maybe<Scalars["String"]["output"]>;
  /** Value of shipping method option name */
  optionName?: Maybe<Scalars["String"]["output"]>;
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Value of shipping method priority */
  priority: Scalars["Int"]["output"];
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
};
export type TaxDetailType = {
  /** Amount */
  amount: MoneyType;
  /** Name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Price */
  price: MoneyType;
  /** Rate */
  rate: MoneyType;
};
export type TierPriceType = {
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Quantity */
  quantity: Scalars["Long"]["output"];
};
export type ValidationErrorType = {
  /** Error code */
  errorCode?: Maybe<Scalars["String"]["output"]>;
  /** Error msg */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  errorParameters?: Maybe<Array<Maybe<ErrorParameterType>>>;
  /** Object id */
  objectId?: Maybe<Scalars["String"]["output"]>;
  /** Object type */
  objectType?: Maybe<Scalars["String"]["output"]>;
};
export type VariationType = {
  /** Assets */
  assets: Array<Asset>;
  /** Availability data */
  availabilityData: AvailabilityData;
  /** SKU of variation. */
  code: Scalars["String"]["output"];
  /** Id of variation. */
  id: Scalars["String"]["output"];
  /** Product images */
  images: Array<ImageType>;
  /** Max. quantity. */
  maxQuantity?: Maybe<Scalars["Int"]["output"]>;
  /** Min. quantity. */
  minQuantity?: Maybe<Scalars["Int"]["output"]>;
  /** Name of variation. */
  name: Scalars["String"]["output"];
  /** Outlines */
  outlines?: Maybe<Array<OutlineType>>;
  /** Product price */
  price: PriceType;
  /** Product prices */
  prices: Array<PriceType>;
  /** The type of product */
  productType?: Maybe<Scalars["String"]["output"]>;
  properties: Array<Property>;
  /** Request related slug for product */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** Product vendor */
  vendor?: Maybe<CommonVendor>;
};
/** A connection from an object to a list of objects of type `Video`. */
export type VideoConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<VideoEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<VideoType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};
/** An edge in a connection from an object to another object of type `Video`. */
export type VideoEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<VideoType>;
};
export type VideoType = {
  /** Video URL */
  contentUrl: Scalars["String"]["output"];
  /** Culture name */
  cultureName?: Maybe<Scalars["String"]["output"]>;
  /** Video description */
  description: Scalars["String"]["output"];
  /** Video duration */
  duration?: Maybe<Scalars["String"]["output"]>;
  /** Embeded video URL */
  embedUrl?: Maybe<Scalars["String"]["output"]>;
  /** Video name */
  name: Scalars["String"]["output"];
  /** ID of the object video is attached to */
  ownerId: Scalars["String"]["output"];
  /** Type of the object video is attached to (Product, Category) */
  ownerType: Scalars["String"]["output"];
  /** Sort order */
  sortOrder: Scalars["Int"]["output"];
  /** Video thumbnial URL */
  thumbnailUrl: Scalars["String"]["output"];
  /** Video upload date */
  uploadDate?: Maybe<Scalars["DateTime"]["output"]>;
};
export type LoggerType = {
  debug: (message: unknown, ...args: unknown[]) => void;
  info: (message: string, ...args: unknown[]) => void;
  warn: (message: string, ...args: unknown[]) => void;
  error: (message: string, ...args: unknown[]) => void;
};
export interface ICurrency {
  code: string;
  symbol: string;
  cultureName: string;
  englishName: string;
  exchangeRate: unknown;
  customFormatting?: string;
}

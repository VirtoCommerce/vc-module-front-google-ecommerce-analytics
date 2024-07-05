# Google Analytics Module For VirtoCommerce Frontend

This module is designed for use with the VirtoCommerce frontend app. It provides a simple interface to initialize and use Google Analytics, allowing you to track user interactions and events on your website.

## Installation

Install the latest version

`yarn add @virto-commerce/front-modules-google-ecommerce-analytics`

or install a specific version

`yarn add @virto-commerce/front-modules-google-ecommerce-analytics@1.0.0`

## Usage

### Import the Module

Import the `useGoogleAnalyticsModule` composable in your Vue component:

`ts
import { useGoogleAnalyticsModule } from "@virto-commerce/front-modules-google-ecommerce-analytics";
`

But preferably use async import

`ts
const { useGoogleAnalyticsModule } = await import("@virto-commerce/front-modules-google-ecommerce-analytics");
`

### Initialize Google Analytics

To initialize Google Analytics, call the `initModule` method with the appropriate properties, the full example:

```ts
// useGoogleAnalytics.ts

import { useScriptTag } from "@vueuse/core";
import { useCurrency } from "@/core/composables/useCurrency";
import { useModuleSettings } from "@/core/composables/useModuleSettings";
import { IS_DEVELOPMENT } from "@/core/constants";
import { Logger } from "@/core/utilities";
import { globals } from "../globals";

const MODULE_ID = "VirtoCommerce.GoogleEcommerceAnalytics";
const IS_ENABLED_KEY = "GoogleAnalytics4.EnableTracking";

const { getModuleSettings, hasModuleSettings, isEnabled } = useModuleSettings(MODULE_ID);

const { currentCurrency } = useCurrency();
const { currencyCode } = globals;

type GoogleAnalyticsMethodsType = ReturnType<typeof import("@virto-commerce/front-modules-google-ecommerce-analytics").useGoogleAnalyticsModule>;
let googleAnalyticsMethods: Omit<GoogleAnalyticsMethodsType, "initModule">;

export function useGoogleAnalytics() {
  async function init(): Promise<void> {
    if (hasModuleSettings && isEnabled(IS_ENABLED_KEY)) {
      try {
        const { useGoogleAnalyticsModule } = await import("@virto-commerce/front-modules-google-ecommerce-analytics");
        const { initModule, ...methods } = useGoogleAnalyticsModule();

        initModule({
          getModuleSettings,
          isDevelopment: IS_DEVELOPMENT,
          logger: Logger,
          useScriptTag,
          currentCurrency,
          currencyCode,
        });
        googleAnalyticsMethods = methods;
      } catch (e) {
        Logger.error(useGoogleAnalytics.name, e);
      }
    }
  }

  return {
    init,
    ...googleAnalyticsMethods,
  };
}
```

```ts
// app-runner.ts

import { useGoogleAnalytics } from '@/core/composables/useGoogleAnalytics';

...

const { init: initializeGoogleAnalytics } = useGoogleAnalytics();

...

void initializeGoogleAnalytics();

```

### Track Events

You can find all provided methods in the [source code](https://github.com/VirtoCommerce/vc-module-front-google-ecommerce-analytics/blob/main/index.ts)

## Links

- [Google Analytics](https://analytics.google.com/)
- [Google Analytics Module](https://github.com/VirtoCommerce/vc-module-google-ecommerce-analytics)
- [Npm module](https://www.npmjs.com/package/@virto-commerce/front-modules-google-ecommerce-analytics)

## License

Copyright (c) Virto Solutions LTD. All rights reserved.

This software is licensed under the Virto Commerce Open Software License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at [http://virtocommerce.com/opensourcelicense](http://virtocommerce.com/opensourcelicense).

export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    dataLayer: Array<unknown>;
    gtag: unknown;
  }
}

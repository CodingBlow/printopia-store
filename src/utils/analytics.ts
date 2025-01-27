declare global {
  interface Window {
    gtag: (
      command: "event",
      action: string,
      params: {
        send_to: string;
        value?: number;
        currency?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export const trackConversion = () => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: "AW-11559189171/z52iCOCjwZUaELP17Icr",
      value: 1.0,
      currency: "INR",
    });
  }
};

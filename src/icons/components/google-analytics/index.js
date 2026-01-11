import GoogleAnalyticsBold from "./GoogleAnalyticsBold";
import GoogleAnalyticsLinear from "./GoogleAnalyticsLinear";
import GoogleAnalyticsTwoTone from "./GoogleAnalyticsTwoTone";

export { GoogleAnalyticsBold, GoogleAnalyticsLinear, GoogleAnalyticsTwoTone };

export const variants = [
  {
    variant: "bold",
    slug: "google-analytics-bold",
    Component: GoogleAnalyticsBold,
    componentName: "GoogleAnalyticsBold",
  },
  {
    variant: "linear",
    slug: "google-analytics-linear",
    Component: GoogleAnalyticsLinear,
    componentName: "GoogleAnalyticsLinear",
  },
  {
    variant: "twotone",
    slug: "google-analytics-twotone",
    Component: GoogleAnalyticsTwoTone,
    componentName: "GoogleAnalyticsTwoTone",
  },
];

export default {
  GoogleAnalyticsBold,
  GoogleAnalyticsLinear,
  GoogleAnalyticsTwoTone,
};

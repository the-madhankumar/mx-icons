import GoogleBold from "./GoogleBold";
import GoogleLinear from "./GoogleLinear";
import GoogleBulk from "./GoogleBulk";
import GoogleBroken from "./GoogleBroken";

export { GoogleBold, GoogleLinear, GoogleBulk, GoogleBroken };

export const variants = [
  {
    variant: "bold",
    slug: "google-bold",
    Component: GoogleBold,
    componentName: "GoogleBold",
  },
  {
    variant: "linear",
    slug: "google-linear",
    Component: GoogleLinear,
    componentName: "GoogleLinear",
  },
  {
    variant: "bulk",
    slug: "google-bulk",
    Component: GoogleBulk,
    componentName: "GoogleBulk",
  },
  {
    variant: "broken",
    slug: "google-broken",
    Component: GoogleBroken,
    componentName: "GoogleBroken",
  },
];

export default { GoogleBold, GoogleLinear, GoogleBulk, GoogleBroken };

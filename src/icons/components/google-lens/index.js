import GoogleLensBold from "./GoogleLensBold";
import GoogleLensLinear from "./GoogleLensLinear";
import GoogleLensTwoTone from "./GoogleLensTwoTone";
import GoogleLensBroken from "./GoogleLensBroken";

export {
  GoogleLensBold,
  GoogleLensLinear,
  GoogleLensTwoTone,
  GoogleLensBroken,
};

export const variants = [
  {
    variant: "bold",
    slug: "google-lens-bold",
    Component: GoogleLensBold,
    componentName: "GoogleLensBold",
  },
  {
    variant: "linear",
    slug: "google-lens-linear",
    Component: GoogleLensLinear,
    componentName: "GoogleLensLinear",
  },
  {
    variant: "twotone",
    slug: "google-lens-twotone",
    Component: GoogleLensTwoTone,
    componentName: "GoogleLensTwoTone",
  },
  {
    variant: "broken",
    slug: "google-lens-broken",
    Component: GoogleLensBroken,
    componentName: "GoogleLensBroken",
  },
];

export default {
  GoogleLensBold,
  GoogleLensLinear,
  GoogleLensTwoTone,
  GoogleLensBroken,
};

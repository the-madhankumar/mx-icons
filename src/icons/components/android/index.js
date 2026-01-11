import AndroidBold from "./AndroidBold";
import AndroidLinear from "./AndroidLinear";
import AndroidTwoTone from "./AndroidTwoTone";

export { AndroidBold, AndroidLinear, AndroidTwoTone };

export const variants = [
  {
    variant: "bold",
    slug: "android-bold",
    Component: AndroidBold,
    componentName: "AndroidBold",
  },
  {
    variant: "linear",
    slug: "android-linear",
    Component: AndroidLinear,
    componentName: "AndroidLinear",
  },
  {
    variant: "twotone",
    slug: "android-twotone",
    Component: AndroidTwoTone,
    componentName: "AndroidTwoTone",
  },
];

export default { AndroidBold, AndroidLinear, AndroidTwoTone };

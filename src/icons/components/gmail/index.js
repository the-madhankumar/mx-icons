import GmailBold from "./GmailBold";
import GmailLinear from "./GmailLinear";
import GmailTwoTone from "./GmailTwoTone";
import GmailBroken from "./GmailBroken";

export { GmailBold, GmailLinear, GmailTwoTone, GmailBroken };

export const variants = [
  {
    variant: "bold",
    slug: "gmail-bold",
    Component: GmailBold,
    componentName: "GmailBold",
  },
  {
    variant: "linear",
    slug: "gmail-linear",
    Component: GmailLinear,
    componentName: "GmailLinear",
  },
  {
    variant: "twotone",
    slug: "gmail-twotone",
    Component: GmailTwoTone,
    componentName: "GmailTwoTone",
  },
  {
    variant: "broken",
    slug: "gmail-broken",
    Component: GmailBroken,
    componentName: "GmailBroken",
  },
];

export default { GmailBold, GmailLinear, GmailTwoTone, GmailBroken };

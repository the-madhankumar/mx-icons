import GoogleDriveBold from "./GoogleDriveBold";
import GoogleDriveLinear from "./GoogleDriveLinear";
import GoogleDriveTwoTone from "./GoogleDriveTwoTone";
import GoogleDriveBroken from "./GoogleDriveBroken";

export {
  GoogleDriveBold,
  GoogleDriveLinear,
  GoogleDriveTwoTone,
};

export const variants = [
  {
    variant: "bold",
    slug: "google-drive-bold",
    Component: GoogleDriveBold,
    componentName: "GoogleDriveBold",
  },
  {
    variant: "linear",
    slug: "google-drive-linear",
    Component: GoogleDriveLinear,
    componentName: "GoogleDriveLinear",
  },
  {
    variant: "twotone",
    slug: "google-drive-twotone",
    Component: GoogleDriveTwoTone,
    componentName: "GoogleDriveTwoTone",
  },
];

export default {
  GoogleDriveBold,
  GoogleDriveLinear,
  GoogleDriveTwoTone,
};

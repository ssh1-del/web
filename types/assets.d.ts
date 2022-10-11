declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.svg" {
  import * as React from "react";
  type SVGComponent = React.FunctionComponent<React.SVGProps<any>>;
  const classes: SVGComponent;
  export default classes;
}

import { FunctionComponent, LazyExoticComponent } from "react";

export interface IRouteItem {
  name: string;
  path: string;
  component: LazyExoticComponent<FunctionComponent<any>>;
  icon: any;
}

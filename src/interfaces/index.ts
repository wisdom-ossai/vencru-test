import { FunctionComponent, LazyExoticComponent } from "react";

export interface IRouteItem {
  name: string;
  path: string;
  component: LazyExoticComponent<FunctionComponent<any>>;
  icon: any;
}

export interface IListGroupItem {
  id: number | string;
  label: string | JSX.Element;
}
export interface IListGroup {
  data: IListGroupItem[];
  onItemClick?: (item: IListGroupItem) => void;
  defaultTabId?: number | string;
}

export interface IPaymentMethod {
  id: number;
  name: string;
  label: string;
  expiry: string;
  icon: any;
  checked: boolean;
}

export interface IPaymentMethodItemProps {
  data: IPaymentMethod;
  onChecked: () => void;
  onEdit: (data: IPaymentMethod) => void;
  onSetDefault: (data: IPaymentMethod) => void;
  checked: boolean;
}

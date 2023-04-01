import { IOrder } from "./IOrder";

export type OrderState = {
  list: IOrder[];
}

export type ChangeNumberAction = {
  id: number,
  count: number
}
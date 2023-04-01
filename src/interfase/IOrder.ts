import { IProduct } from "./IProduct";

export interface IOrder extends IProduct {
  count: number,
}
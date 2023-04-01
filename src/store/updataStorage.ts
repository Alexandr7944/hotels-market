import { IProduct } from "../interfase/IProduct";

export const updataStorage = (type: string, data: IProduct[]) => {
  localStorage.setItem(type, JSON.stringify(data));
}

export const removeStorage = (type: string) => localStorage.removeItem(type);

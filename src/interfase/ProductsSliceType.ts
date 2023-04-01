import { IProduct } from "./IProduct";

export type ProductState = {
  list: IProduct[];
  filterPrice: IProduct[];
  categories: IProduct[];
}

export type SortType = {
  priceIncrease: (arr: IProduct[]) => void,
  priceLowering: (arr: IProduct[]) => void,
  nameAZ: (arr: IProduct[]) => void,
  nameZA: (arr: IProduct[]) => void,
}


export type FilterPriceAction = {
  from: number,
  to: number,
  brends?: Array<string>
}


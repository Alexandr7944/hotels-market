import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from '../data/data.json';
import { IProduct } from "../interfase/IProduct";
import { FilterPriceAction, ProductState, SortType } from "../interfase/ProductsSliceType";
import { updataStorage } from "./updataStorage";

const initialList = () => {
  const dataLocal = localStorage.getItem('listProducts');
  if (dataLocal) return JSON.parse(dataLocal);
  localStorage.setItem('listProducts', JSON.stringify(data));
  return data
}

const dataLocal = initialList();

const initialState: ProductState = {
  list: dataLocal,
  filterPrice: dataLocal,
  categories: dataLocal,
};

const productSlice = createSlice({
  name: 'listOfProduct',
  initialState, 
  reducers: {
    sortList(state, action: PayloadAction<string>) {
      const methodsSortList: SortType = {
        priceIncrease: (arr) => arr.sort((a, b) => a.price - b.price),
        priceLowering: (arr) => arr.sort((a, b) => b.price - a.price),
        nameAZ: (arr) => arr.sort((a, b) => a.title > b.title ? 1 : -1),
        nameZA: (arr) => arr.sort((a, b) => a.title < b.title ? 1 : -1),
      }

      methodsSortList[action.payload as keyof SortType](state.list);
      state.categories = state.list;
      updataStorage('listProducts', state.list);
    },

    filterList(state, action: PayloadAction<string[]>) {
      const [type, name] = action.payload;
      
      name === 'all'
        ? state.categories = state.list
        : type === "type"
          ? state.categories = state.list.filter(el => el.type.includes(name))
          : state.categories = state.list.filter(el => el.subtype?.includes(name))
    },

    filterParameterList(state, action: PayloadAction<FilterPriceAction>) {
      const { from, to, brends } = action.payload;
      state.categories = state.filterPrice = state.list.filter(el => {
        return (
          el.price > from 
          && el.price < to
          && (brends && brends.length !== 0
            ? brends.includes(el.brend)
            : true)
        )
      })
    },

    addProduct(state, action: PayloadAction<IProduct>) {
      const newProduct = action.payload;
      newProduct.id = Math.floor(Math.random() * 1000000)
      state.list.push(newProduct);
      updataStorage('listProducts', state.list)   
    },

    changeProduct(state, action: PayloadAction<IProduct>) {
      const index = state.list.findIndex(el => el.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
      updataStorage('listProducts', state.list);    
    },
  
    removeProduct(state, action: PayloadAction<number>) {
      state.list = state.list.filter(product => product.id !== action.payload);
      updataStorage('listProducts', state.list);
    },
  }
});

export const { 
  sortList, filterList, filterParameterList, addProduct, changeProduct, removeProduct 
} = productSlice.actions;
export default productSlice.reducer;
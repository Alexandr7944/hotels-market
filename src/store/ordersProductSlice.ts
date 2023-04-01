import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../interfase/IOrder";
import { removeStorage, updataStorage } from "./updataStorage";
import { ChangeNumberAction, OrderState } from "../interfase/OrderSliceType";

const initialList = () => {
  const orderLocal = localStorage.getItem('orderProducts');
  if (orderLocal) return JSON.parse(orderLocal);
  return [];
}

const initialState: OrderState = {
  list: initialList(),
};

const orderSlice = createSlice({
  name: 'orderProducts',
  initialState, 
  reducers: {
    addOrder(state, action: PayloadAction<IOrder>) {
      const order = state.list.find(el => el.id === action.payload.id);
      order ? order.count = action.payload.count : state.list.push(action.payload);
      updataStorage('orderProducts', state.list);
    },

    removeOrder(state, action: PayloadAction<number>) {
      state.list = state.list.filter(product => product.id !== action.payload);
      updataStorage('orderProducts', state.list);
    },
  
    changeNumber(state, action: PayloadAction<ChangeNumberAction>) {
      const order = state.list.find(el => el.id === action.payload.id);
      if (order) order.count = action.payload.count;
      updataStorage('orderProducts', state.list);
    },

    checkoutState(state) {
      state.list = [];
      removeStorage('orderProducts');
    },
  }
});

export const {addOrder, removeOrder, checkoutState, changeNumber} = orderSlice.actions;
export default orderSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import listOfProductsReducer from './listOfProductsSlice'
import orderProductsReducer from './ordersProductSlice'

const store = configureStore({
  reducer: {
    listOfProducts: listOfProductsReducer,
    orderProducts: orderProductsReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

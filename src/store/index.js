import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import orderSlice from "./order-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;

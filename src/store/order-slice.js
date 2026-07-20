import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderNumber: null,
    items: [],
    shipping: { firstName: "", lastName: "", email: "", address: "", city: "", state: "", zip: "", phone: "" },
    payment: { cardNumber: "", cardName: "", expiry: "", cvv: "" },
    subtotal: 0,
    shippingCost: 0,
    tax: 0,
    total: 0,
    voucherCode: "",
    date: null,
  },
  reducers: {
    placeOrder(state, action) {
      const { items, shipping, payment, subtotal, shippingCost, tax, total, voucherCode } = action.payload;
      state.orderNumber = `LR-${Date.now().toString(36).toUpperCase()}`;
      state.items = items;
      state.shipping = shipping;
      state.payment = { ...payment, cvv: "•••" };
      state.subtotal = subtotal;
      state.shippingCost = shippingCost;
      state.tax = tax;
      state.total = total;
      state.voucherCode = voucherCode;
      state.date = new Date().toISOString();
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;

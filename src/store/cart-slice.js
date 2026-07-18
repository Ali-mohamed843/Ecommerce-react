import { createSlice } from "@reduxjs/toolkit";
import data from "../../products.json";

const calculateTotals = (items) => {
  return items.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity;
      acc.totalPrice += item.product.price * item.quantity;
      return acc;
    },
    { totalQuantity: 0, totalPrice: 0 },
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    voucher: { status: "", message: "", code: "" },
    shipping: 15,
    tax: 0.08,
  },
  reducers: {
    addItem(state, action) {
      const newItem = {
        product: action.payload.product,
        quantity: action.payload.quantity,
        selectedColor: action.payload.selectedColor,
        selectedSize: action.payload.selectedSize,
      };

      const existingItem = state.items.find(
        (item) => item.product.id === newItem.product.id,
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },

    removeItem(state, action) {
      state.items = state.items = state.items.filter((item) => {
        item.product.id !== action.payload.id;
      });
    },

    editQuantity(state, action) {
      const quantityOffset = action.payload.quantity;
      const selectedItem = state.items.find(
        (item) => item.product.id === action.payload.product.id,
      );
      selectedItem.quantity += quantityOffset;
      if (selectedItem.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.product.id,
        );
      }
      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },

    emptyCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.voucher = { status: "", message: "", code: "" };
    },

    applyVoucher(state, action) {
      const newVoucher = action.payload.voucher.trim();

      // Recalculate original total first
      const totals = calculateTotals(state.items);
      let totalPrice = totals.totalPrice;

      // No voucher entered
      if (!newVoucher) {
        state.totalPrice = totalPrice;
        state.voucher = {
          status: "",
          message: "",
          code: "",
        };
        return;
      }

      const discount = data.vouchers.find(
        (voucher) => voucher.code.toLowerCase() === newVoucher.toLowerCase(),
      );

      if (!discount) {
        state.totalPrice = totalPrice;
        state.voucher = {
          status: "error",
          message: "Invalid voucher code",
          code: "",
        };
        return;
      }

      // Apply discount to the fresh total
      state.totalPrice = totalPrice * (1 - discount.discount);

      state.voucher = {
        status: "success",
        message: "Voucher applied successfully",
        code: newVoucher,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload); // payload - obj newItam
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload); // payload - id
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload); // payload - id
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    reduceItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload); // payload - id
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  reduceItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

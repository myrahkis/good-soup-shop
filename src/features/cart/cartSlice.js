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

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
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

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCartQuantity = (state) => state.cart.cart.length;

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalItemPrice = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.totalPrice;

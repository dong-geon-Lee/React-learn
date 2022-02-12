import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartItem(state, action) {
      const newItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;
      state.changed = true;

      if (!existingCartItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingCartItem.quantity++;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice + newItem.price;
      }
    },
    removeToCartItem(state, action) {
      const id = action.payload;
      const existingCartItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.changed = true;

      if (existingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingCartItem.quantity--;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice - existingCartItem.price;
      }
    },
    replaceCartItem(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

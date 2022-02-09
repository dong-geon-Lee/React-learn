import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isShowCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle(state) {
      state.isShowCart = !state.isShowCart;
    },
    add(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

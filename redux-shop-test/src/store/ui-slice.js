import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsShow: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsShow = !state.cartIsShow;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

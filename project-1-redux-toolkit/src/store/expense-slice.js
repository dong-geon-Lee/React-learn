import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  toggle: false,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense(state, action) {},
    removeExpense(state, action) {},
    toggleExpense(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;

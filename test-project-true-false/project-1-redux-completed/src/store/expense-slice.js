import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  toggle: false,
  year: 2022,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense(state, action) {
      state.items.unshift({
        id: action.payload.id,
        title: action.payload.title,
        amount: action.payload.amount,
        date: action.payload.date,
      });
    },
    removeExpense(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleExpense(state) {
      state.toggle = !state.toggle;
    },
    selectYearExpense(state, action) {
      state.year = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/carts";

const initialState = {
  cartItems: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  editItem: false,
};

export const addCartList = createAsyncThunk(
  "add/cartList",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, data);

      return response.data;
    } catch (error) {
      const message = error.response.data.message || error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCartList = createAsyncThunk(
  "get/cartList",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(API_URL, data);

      return response.data;
    } catch (error) {
      const message = error.response.data.error || error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCartList = createAsyncThunk(
  "delete/cartList",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);

      return response.data;
    } catch (error) {
      const message = error.response.data.error || error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateCartList = createAsyncThunk(
  "update/cartList",
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, id);

      return response.data;
    } catch (error) {
      const message = error.response.data.error || error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    reset: (state) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCartList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCartList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cartItems.push(action.payload);
      })
      .addCase(addCartList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCartList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cartItems = action.payload;
      })
      .addCase(getCartList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCartList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload.id
        );
      })
      .addCase(deleteCartList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateCartList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        const { _id, title, price, description } = action.payload;

        const existingCartList = state.cartItems.find(
          (cartItem) => cartItem._id === _id
        );

        console.log(existingCartList);

        if (existingCartList) {
          existingCartList.title = title;
          existingCartList.price = price;
          existingCartList.description = description;
        }
      })
      .addCase(updateCartList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { initialStateProducts } from "./Initial";
import { getAllProductsThunk } from "../reducers";

export const productsSlice = createSlice({
  name: "products",
  initialState: initialStateProducts,
  reducers: {
    addToAddedProducts: (state, action) => {
      const newProduct = action.payload;
      console.log("newProduct ===", ...newProduct);
      state.addedProducts.push(...newProduct);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { addToAddedProducts } = productsSlice.actions;

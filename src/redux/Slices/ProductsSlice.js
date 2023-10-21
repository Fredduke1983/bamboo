import { createSlice } from "@reduxjs/toolkit";
import { initialStateProducts } from "./Initial";
import { getAllProductsThunk } from "../reducers";

export const productsSlice = createSlice({
  name: "products",
  initialState: initialStateProducts,
  reducers: {
    addToAddedProducts: (state, action) => {
      const newProduct = action.payload;
      state.addedProducts.push(...newProduct);
    },
    deleteFromAddedProducts: (state, action) => {
      state.addedProducts = state.addedProducts.filter(
        (el) => el.keyId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { addToAddedProducts, deleteFromAddedProducts } =
  productsSlice.actions;

import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { initialStateUsers } from "./Initial";
import { loginUserThunk, logoutUserThunk } from "../reducers";

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateUsers,

  reducers: {
    addNewUser: (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        password: payload.password,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.user.token;
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.isLoggedin = true;
        state.isLoading = false;
      })
      .addCase(logoutUserThunk.fulfilled, (state, _) => {
        state.token = "";
        state.isLoggedin = false;
      })
      .addMatcher(isAnyOf(loginUserThunk.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(loginUserThunk.rejected), (state, action) => {
        console.log("object :>> ", action.error.message);
        state.isLoading = false;
      });
  },
});
export const { addNewUser } = userSlice.actions;

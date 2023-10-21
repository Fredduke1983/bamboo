import { createSlice } from "@reduxjs/toolkit";

import { initialStateUsers } from "./Initial";

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
    signInUser: (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        token: payload.token,
        testimonials: payload.testimonials,
      };
    },
  },
});
export const { addNewUser, signInUser } = userSlice.actions;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../fetches/getProducts";
import { loginUser } from "../fetches/users/loginUser";
import { logoutUser } from "../fetches/users/logoutUser";

export const getAllProductsThunk = createAsyncThunk(
  "bamboo/products",
  async () => {
    const data = await getProducts();
    return data;
  }
);

export const loginUserThunk = createAsyncThunk(
  "user/loginUser",
  async (user) => {
    const data = await loginUser(user);
    return data;
  }
);

export const logoutUserThunk = createAsyncThunk("user/logout", async () => {
  await logoutUser();
  return;
});
// export const getCurrentUserThunk = createAsyncThunk(
//   "users/getUser",
//   async (_, thunk) => {
//     const data = await fetchGetCurrentUser(thunk.getState().users.token);
//     return data;
//   }
// );

// export const getContactsThunk = createAsyncThunk(
//   "phonebook/getContacts",
//   async (_, thunk) => {
//     return await getContacts(thunk.getState().users.token);
//   }
// );

// export const createContactsThunk = createAsyncThunk(
//   "phonebook/createContacts",
//   async (contact, thunk) => {
//     const data = await createContacts(contact, thunk.getState().users.token);
//     return data;
//   }
// );

// export const deleteContactsThunk = createAsyncThunk(
//   "phonebook/deleteContacts",
//   async (id) => {
//     return await deleteContacts(id);
//   }
// );

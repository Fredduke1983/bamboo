import { baseAxios } from "./baseAxios";

// const setToken = (token) => {
//   return (baseAxios.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer ${token}`);
// };

// const delToken = () =>
//   delete baseAxios.defaults.headers.common["Authorization"];

export const registrationUser = async (newUser) => {
  try {
    const response = await baseAxios.post("/auth/register", newUser);
    // setToken(response.data.token);
    return response;
  } catch (error) {
    return error;
  }
};

// export const fetchLoginUser = async (user) => {
//   try {
//     const { data } = await baseAxios.post("/users/login", user);
//     setToken(data.token);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchGetCurrentUser = async (token) => {
//   try {
//     if (token === "") return;
//     setToken(token);
//     const { data } = await baseAxios.get("/users/current");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchLogoutUser = async (token) => {
//   try {
//     await baseAxios.post("/users/logout");
//     delToken();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getContacts = async (token) => {
//   if (token === "") return;
//   setToken(token);
//   const { data } = await baseAxios.get("/contacts");
//   return data;
// };

// export const createContacts = async (contact, token) => {
//   setToken(token);
//   const { data } = await baseAxios.post(`/contacts`, contact);
//   return data;
// };

// export const deleteContacts = async (id) => {
//   const deleteContact = await baseAxios.delete(`/contacts/${id}`);

//   return deleteContact.data;
// };

// import axios from "axios";

// export const registrationUser = async (data) => {
//   await axios({
//     method: "post",
//     url: "https://bamboo-paradise-or8p.onrender.com/api/auth/register",
//     data: {
//       name: `${data.name}`,
//       email: `${data.email}`,
//       password: `${data.password}`,
//     },
//   })
//     .then((el) => el)
//     .catch((er) => er);
// };

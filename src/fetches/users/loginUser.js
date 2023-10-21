import { baseAxios } from "./baseAxios";

const setToken = (token) => {
  return (baseAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`);
};

const delToken = () =>
  delete baseAxios.defaults.headers.common["Authorization"];

export const loginUser = async (user) => {
  try {
    const { data } = await baseAxios.post("/auth/login", user);
    console.log("data :>> ", data);
    setToken(data.token);
    return data;
  } catch (error) {
    console.log("error 1:>> ", error);
    return error.response.data.errorMsg;
  }
};

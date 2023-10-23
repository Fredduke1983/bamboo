import { baseAxios } from "./baseAxios";

const setToken = (token) => {
  return (baseAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`);
};

export const loginUser = async (user) => {
  const { data } = await baseAxios.post("/auth/login", user);
  console.log("data LOGIN USER:>> ", data.user);
  setToken(data.user.token);
  return data;
};

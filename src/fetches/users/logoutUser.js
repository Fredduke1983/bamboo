import { baseAxios } from "./baseAxios";

const delToken = () =>
  delete baseAxios.defaults.headers.common["Authorization"];

export const logoutUser = async () => {
  const data = await baseAxios.post("/auth/logout");
  console.log("data LOGOUT USER:>> ", data);

  delToken();
  return;
};

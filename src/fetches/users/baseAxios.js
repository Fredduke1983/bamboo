import axios from "axios";

export const baseAxios = axios.create({
  // baseURL: "https://bamboo-paradise-or8p.onrender.com/api",
  baseURL: "http://localhost:3065/api",
});

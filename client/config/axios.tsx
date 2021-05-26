import axios from "axios";

export const axiosConnect = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

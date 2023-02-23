import axios from "axios";
// import { baseURL } from "./requests";
// import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://api-dev.luchismart.com/",
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;

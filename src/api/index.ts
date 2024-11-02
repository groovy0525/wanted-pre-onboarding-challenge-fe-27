import axios from "axios";

const baseURL = "http://localhost:8080";

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    if (config.url !== "/users/create" && config.url !== "/users/login") {
      const token = localStorage.getItem("token");

      if (!token) {
        return Promise.reject(
          new Error("Token is missing. Request cancelled.")
        );
      }

      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

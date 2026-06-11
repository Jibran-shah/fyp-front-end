import axios from "axios";
import { store } from "../store/store";
import { logout } from "../store/slices/auth.slice";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve();
  });

  failedQueue = [];
};

const forceLogout = () => {
  const state = store.getState();

  if (!state.auth.isAuthenticated) {
    return;
  }
  
  store.dispatch(logout());

  if (window.location.pathname !== "/login") {
    window.location.href = "/login";
  }
};

apiClient.interceptors.response.use(
  (response) => response.data,

  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    const isUnauthorized = error.response.status === 401;

    if (isUnauthorized && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => apiClient(originalRequest));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/auth/refresh-token",
          {},
          { withCredentials: true }
        );

        // IMPORTANT: validate refresh response
        if (!res || res.status !== 200) {
          
          throw new Error("Refresh failed");
        }

        processQueue(null);

        return apiClient(originalRequest);
      } catch (err) {
        processQueue(err);
        forceLogout();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
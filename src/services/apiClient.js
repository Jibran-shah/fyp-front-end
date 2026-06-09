import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api/v1",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const formattedError = {
      message: error?.response?.data?.message || "Something went wrong",
      status: error?.response?.status,
      data: error?.response?.data,
    };

    return Promise.reject(formattedError);
  }
);
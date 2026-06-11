import { apiClient } from "../apiClient";

// AUTH
export const register = (data) =>
  apiClient.post("/auth/register", data);

export const login = (data) =>
  apiClient.post("/auth/login", data);

export const logout = () =>
  apiClient.post("/auth/logout");

export const logoutAll = () =>
  apiClient.post("/auth/logout-all");

export const refreshToken = () =>
  apiClient.get("/auth/refresh-token");

export const getMe = () =>
  apiClient.get("/auth/me");

// PASSWORD RESET
export const forgotPassword = (data) =>
  apiClient.post("/auth/forgot-password", data);

export const verifyResetOtp = (data) =>
  apiClient.post("/auth/verify-reset-otp", data);

export const resetPassword = (data) =>
  apiClient.post("/auth/reset-password", data);

export const resendResetOtp = (data) =>
  apiClient.post("/auth/resend-reset-otp", data);

// EMAIL
export const verifyEmail = (query) =>
  apiClient.get("/auth/verify-email", { params: query });

export const getUserById = (id) =>
  apiClient.get(`/auth/${id}`);

export const resendVerifyEmail = (data) =>
  apiClient.post("/auth/resend-verify-email", data);
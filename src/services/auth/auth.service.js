import { apiClient } from "../apiClient";

// ================= HELPERS =================
const logRequest = (name, payload) => {
  console.log(`[AUTH REQUEST] ${name}`, payload ?? "");
};

const logResponse = (name, response) => {
  console.log(`[AUTH RESPONSE] ${name}`, response?.data);
};

const logError = (name, error) => {
  console.error(`[AUTH ERROR] ${name}`, error?.response?.data || error.message);
};

// ================= AUTH =================
export const register = async (data) => {
  try {
    logRequest("register", data);
    const res = await apiClient.post("/auth/register", data);
    logResponse("register", res);
    return res;
  } catch (err) {
    logError("register", err);
    throw err;
  }
};

export const login = async (data) => {
  try {
    logRequest("login", data);
    const res = await apiClient.post("/auth/login", data);
    logResponse("login", res);
    return res;
  } catch (err) {
    logError("login", err);
    throw err;
  }
};

export const logout = async () => {
  try {
    logRequest("logout");
    const res = await apiClient.post("/auth/logout");
    logResponse("logout", res);
    return res;
  } catch (err) {
    logError("logout", err);
    throw err;
  }
};

export const logoutAll = async () => {
  try {
    logRequest("logoutAll");
    const res = await apiClient.post("/auth/logout-all");
    logResponse("logoutAll", res);
    return res;
  } catch (err) {
    logError("logoutAll", err);
    throw err;
  }
};

export const refreshToken = async () => {
  try {
    logRequest("refreshToken");
    const res = await apiClient.get("/auth/refresh-token");
    logResponse("refreshToken", res);
    return res;
  } catch (err) {
    logError("refreshToken", err);
    throw err;
  }
};

export const getMe = async () => {
  try {
    logRequest("getMe");
    const res = await apiClient.get("/auth/me");
    logResponse("getMe", res);
    return res;
  } catch (err) {
    logError("getMe", err);
    throw err;
  }
};

// ================= PASSWORD RESET =================
export const forgotPassword = async (data) => {
  try {
    logRequest("forgotPassword", data);
    const res = await apiClient.post("/auth/forgot-password", data);
    logResponse("forgotPassword", res);
    return res;
  } catch (err) {
    logError("forgotPassword", err);
    throw err;
  }
};

export const verifyResetOtp = async (data) => {
  try {
    logRequest("verifyResetOtp", data);
    const res = await apiClient.post("/auth/verify-reset-otp", data);
    logResponse("verifyResetOtp", res);
    return res;
  } catch (err) {
    logError("verifyResetOtp", err);
    throw err;
  }
};

export const resetPassword = async (data) => {
  try {
    logRequest("resetPassword", data);
    const res = await apiClient.post("/auth/reset-password", data);
    logResponse("resetPassword", res);
    return res;
  } catch (err) {
    logError("resetPassword", err);
    throw err;
  }
};

export const resendResetOtp = async (data) => {
  try {
    logRequest("resendResetOtp", data);
    const res = await apiClient.post("/auth/resend-reset-otp", data);
    logResponse("resendResetOtp", res);
    return res;
  } catch (err) {
    logError("resendResetOtp", err);
    throw err;
  }
};

// ================= EMAIL =================
export const verifyEmail = async (query) => {
  try {
    logRequest("verifyEmail", query);
    const res = await apiClient.get("/auth/verify-email", { params: query });
    logResponse("verifyEmail", res);
    return res;
  } catch (err) {
    logError("verifyEmail", err);
    throw err;
  }
};

export const getUserById = async (id) => {
  try {
    logRequest("getUserById", id);
    const res = await apiClient.get(`/auth/${id}`);
    logResponse("getUserById", res);
    return res;
  } catch (err) {
    logError("getUserById", err);
    throw err;
  }
};

export const resendVerifyEmail = async (data) => {
  try {
    logRequest("resendVerifyEmail", data);
    const res = await apiClient.post("/auth/resend-verify-email", data);
    logResponse("resendVerifyEmail", res);
    return res;
  } catch (err) {
    logError("resendVerifyEmail", err);
    throw err;
  }
};
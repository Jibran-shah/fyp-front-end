import { apiClient } from "../apiClient";

/* =========================
   GET MY WALLET
========================= */
export const getMyWallet = () => {
  return apiClient.get("/wallet/me");
};
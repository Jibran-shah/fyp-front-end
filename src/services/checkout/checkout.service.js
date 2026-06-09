import { apiClient } from "../apiClient";

/* =========================
   CHECKOUT
========================= */
export const checkout = (data) =>
  apiClient.post("/checkout", data);
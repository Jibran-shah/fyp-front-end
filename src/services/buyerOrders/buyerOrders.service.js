import { apiClient } from "../apiClient";

/* =========================
   GET MY BUYER ORDERS
========================= */
export const getMyBuyerOrders = (params) =>
  apiClient.get("/buyer-orders/my", { params });

/* =========================
   GET SINGLE BUYER ORDER
========================= */
export const getBuyerOrderById = (buyerOrderId) =>
  apiClient.get(`/buyer-orders/${buyerOrderId}`);

/* =========================
   CANCEL BUYER ORDER
========================= */
export const cancelBuyerOrder = (buyerOrderId) =>
  apiClient.patch(`/buyer-orders/${buyerOrderId}/cancel`);
import { apiClient } from "../apiClient";

/* =========================
   GET MY SELLER ORDERS
========================= */
export const getMySellerOrders = (params) =>
  apiClient.get("/sellerOrders/my", { params });

/* =========================
   GET SELLER ORDER BY ID
========================= */
export const getSellerOrderById = (sellerOrderId) =>
  apiClient.get(`/sellerOrders/${sellerOrderId}`);

/* =========================
   UPDATE STATUS (SOURCE OF TRUTH)
========================= */
export const updateSellerOrderStatus = (sellerOrderId, data) =>
  apiClient.patch(`/sellerOrders/${sellerOrderId}/status`, data);

/* =========================
   LIFECYCLE WRAPPERS
========================= */
export const markAsProcessing = (sellerOrderId) =>
  apiClient.patch(`/sellerOrders/${sellerOrderId}/process`);

export const markAsShipped = (sellerOrderId) =>
  apiClient.patch(`/sellerOrders/${sellerOrderId}/ship`);

export const markAsDelivered = (sellerOrderId) =>
  apiClient.patch(`/sellerOrders/${sellerOrderId}/deliver`);

/* =========================
   CANCEL ORDER
========================= */
export const cancelSellerOrder = (sellerOrderId) =>
  apiClient.patch(`/sellerOrders/${sellerOrderId}/cancel`);
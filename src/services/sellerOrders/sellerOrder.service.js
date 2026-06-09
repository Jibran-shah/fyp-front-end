import { apiClient } from "../apiClient";

/* =========================
   GET MY SELLER ORDERS
========================= */
export const getMySellerOrders = (params) =>
  apiClient.get("/seller-orders/my", { params });

/* =========================
   GET SELLER ORDER BY ID
========================= */
export const getSellerOrderById = (sellerOrderId) =>
  apiClient.get(`/seller-orders/${sellerOrderId}`);

/* =========================
   UPDATE STATUS (SOURCE OF TRUTH)
========================= */
export const updateSellerOrderStatus = (sellerOrderId, data) =>
  apiClient.patch(`/seller-orders/${sellerOrderId}/status`, data);

/* =========================
   LIFECYCLE WRAPPERS
========================= */
export const markAsProcessing = (sellerOrderId) =>
  apiClient.patch(`/seller-orders/${sellerOrderId}/process`);

export const markAsShipped = (sellerOrderId) =>
  apiClient.patch(`/seller-orders/${sellerOrderId}/ship`);

export const markAsDelivered = (sellerOrderId) =>
  apiClient.patch(`/seller-orders/${sellerOrderId}/deliver`);

/* =========================
   CANCEL ORDER
========================= */
export const cancelSellerOrder = (sellerOrderId) =>
  apiClient.patch(`/seller-orders/${sellerOrderId}/cancel`);
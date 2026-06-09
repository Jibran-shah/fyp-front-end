import { apiClient } from "../apiClient";

/* =========================
   GET CART
========================= */
export const getCart = () =>
  apiClient.get("/cart");

/* =========================
   ADD TO CART
========================= */
export const addToCart = (data) =>
  apiClient.post("/cart/add", data);

/* =========================
   UPDATE CART ITEM
========================= */
export const updateCartItem = (data) =>
  apiClient.patch("/cart/item", data);

/* =========================
   REMOVE ITEM
========================= */
export const removeCartItem = (productId) =>
  apiClient.delete(`/cart/item/${productId}`);

/* =========================
   CLEAR CART
========================= */
export const clearCart = () =>
  apiClient.delete("/cart/clear");
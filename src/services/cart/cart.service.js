import { apiClient } from "../apiClient";

/* =========================
   GET CART
========================= */
export const getCart = async () => {
  console.log("[getCart] fetching cart");

  const res = await apiClient.get("/cart");

  console.log("[getCart] response:", res);
  console.log("[getCart] data:", res?.data);

  return res;
};

/* =========================
   ADD TO CART
========================= */
export const addToCart = async (data) => {
  console.log("[addToCart] request data:", data);

  const res = await apiClient.post("/cart/add", data);

  console.log("[addToCart] response:", res);
  console.log("[addToCart] data:", res?.data);

  return res;
};

/* =========================
   UPDATE CART ITEM
========================= */
export const updateCartItem = async (data) => {
  console.log("[updateCartItem] request data:", data);

  const res = await apiClient.patch("/cart/item", data);

  console.log("[updateCartItem] response:", res);
  console.log("[updateCartItem] data:", res?.data);

  return res;
};

/* =========================
   REMOVE ITEM
========================= */
export const removeCartItem = async (productId) => {
  console.log("[removeCartItem] productId:", productId);

  const res = await apiClient.delete(
    `/cart/item/${productId}`
  );

  console.log("[removeCartItem] response:", res);
  console.log("[removeCartItem] data:", res?.data);

  return res;
};

/* =========================
   CLEAR CART
========================= */
export const clearCart = async () => {
  console.log("[clearCart] clearing cart");

  const res = await apiClient.delete("/cart/clear");

  console.log("[clearCart] response:", res);
  console.log("[clearCart] data:", res?.data);

  return res;
};
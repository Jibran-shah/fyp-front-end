import { apiClient } from "../apiClient";

/* =========================
   CREATE PRODUCT
========================= */
export const createProduct = async (data) => {
  const res = await apiClient.post("/products", data);
  return res.data.data;
};

/* =========================
   GET PRODUCTS (LIST)
========================= */
export const getProducts = async (params) => {
  const res = await apiClient.get("/products", { params });
  return {
    data: res.data.data,
    meta: res.data.meta
  };
};

/* =========================
   GET BY ID
========================= */
export const getProductById = async (id) => {
  const res = await apiClient.get(`/products/${id}`);
  return res.data.data;
};

/* =========================
   GET BY CATEGORY
========================= */
export const getProductsByCategory = async (categoryId) => {
  const res = await apiClient.get(`/products/category/${categoryId}`);
  return res.data.data;
};

/* =========================
   GET SELLER PRODUCTS
========================= */
export const getMySellerProducts = async () => {
  const res = await apiClient.get("/products/seller/me");
  return res.data.data;
};

/* =========================
   UPDATE PRODUCT
========================= */
export const updateProduct = async ({ id, data }) => {
  const res = await apiClient.patch(`/products/${id}`, data);
  return res.data.data;
};

/* =========================
   DELETE PRODUCT
========================= */
export const deleteProduct = async (id) => {
  const res = await apiClient.delete(`/products/${id}`);
  return res.data;
};
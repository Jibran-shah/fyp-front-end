import { apiClient } from "../apiClient";

/* =========================
   CREATE SELLER
========================= */
export const createProductSeller = async (data) => {
  const res = await apiClient.post("/profiles/sellers", data);
  return res.data.productSeller;
};

/* =========================
   GET ALL SELLERS
========================= */
export const getAllProductSellers = async (params) => {
  const res = await apiClient.get("/profiles/sellers", { params });
  return res.data.productSellers;
};

/* =========================
   GET BY ID
========================= */
export const getProductSellerById = async (id) => {
  const res = await apiClient.get(`/profiles/sellers/${id}`);
  return res.data.productSeller;
};

/* =========================
   GET MY SELLER
========================= */
export const getMySellerProfile = async () => {
  const res = await apiClient.get("/profiles/ellers/me");
  return res.data.productSeller;
};

/* =========================
   UPDATE SELLER
========================= */
export const updateProductSeller = async ({ id, data }) => {
  const res = await apiClient.put(`/profiles/sellers/${id}`, data);
  return res.data.productSeller;
};

/* =========================
   DELETE SELLER
========================= */
export const deleteProductSeller = async (id) => {
  const res = await apiClient.delete(`/product-sellers/${id}`);
  return res.data;
};

/* =========================
   BULK DELETE
========================= */
export const bulkDeleteProductSellers = async (data) => {
  const res = await apiClient.post("/product-sellers/bulk-delete", data);
  return res.data;
};
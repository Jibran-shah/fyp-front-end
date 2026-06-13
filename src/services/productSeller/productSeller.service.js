import { apiClient } from "../apiClient";

/* =========================
   CREATE SELLER
========================= */
export const createProductSeller = async (data) => {
  console.log("[createProductSeller] REQUEST =>", {
    endpoint: "/profiles/sellers",
    data,
  });

  const res = await apiClient.post("/profiles/sellers", data);

  console.log("[createProductSeller] RAW RESPONSE =>", res);
  console.log("[createProductSeller] RESPONSE DATA =>", res?.data);
  console.log("[createProductSeller] RETURN =>", res?.data?.productSeller);

  return res?.data ?? null;
};


/* =========================
   GET ALL SELLERS
========================= */
export const getAllProductSellers = async (params) => {
  console.log("[getAllProductSellers] REQUEST =>", {
    endpoint: "/profiles/sellers",
    params,
  });

  const res = await apiClient.get("/profiles/sellers", { params });

  console.log("[getAllProductSellers] RAW RESPONSE =>", res);
  console.log("[getAllProductSellers] RESPONSE DATA =>", res?.data);
  console.log("[getAllProductSellers] RETURN =>", res?.data?.productSellers);

  return res?.data?.productSellers ?? [];
};


/* =========================
   GET BY ID
========================= */
export const getProductSellerById = async (id) => {
  console.log("[getProductSellerById] REQUEST =>", {
    endpoint: `/profiles/sellers/${id}`,
    id,
  });

  const res = await apiClient.get(`/profiles/sellers/${id}`);

  console.log("[getProductSellerById] RAW RESPONSE =>", res);
  console.log("[getProductSellerById] RESPONSE DATA =>", res?.data);
  console.log("[getProductSellerById] RETURN =>", res?.data?.productSeller);

  return res?.data?.productSeller ?? null;
};


/* =========================
   GET MY SELLER
========================= */
export const getMySellerProfile = async () => {
  console.log("[getMySellerProfile] REQUEST => /profiles/sellers/me");

  const res = await apiClient.get("/profiles/sellers/me"); // fixed typo

  console.log("[getMySellerProfile] RAW RESPONSE =>", res);
  console.log("[getMySellerProfile] RESPONSE DATA =>", res?.data);
  console.log("[getMySellerProfile] RETURN =>", res?.data?.productSeller);

  return res?.data?.productSeller ?? null;
};


/* =========================
   UPDATE SELLER
========================= */
export const updateProductSeller = async ({ id, data }) => {
  console.log("[updateProductSeller] REQUEST =>", {
    endpoint: `/profiles/sellers/${id}`,
    id,
    data,
  });

  const res = await apiClient.put(`/profiles/sellers/${id}`, data);

  console.log("[updateProductSeller] RAW RESPONSE =>", res);
  console.log("[updateProductSeller] RESPONSE DATA =>", res?.data);
  console.log("[updateProductSeller] RETURN =>", res?.data?.productSeller);

  return res?.data?.productSeller ?? null;
};


/* =========================
   DELETE SELLER
========================= */
export const deleteProductSeller = async () => {
  console.log("[deleteProductSeller] REQUEST =>", {
    endpoint: `/sellers`
  });

  const res = await apiClient.delete(`/profiles/sellers`);

  console.log("[deleteProductSeller] RAW RESPONSE =>", res);
  console.log("[deleteProductSeller] RESPONSE DATA =>", res?.data);

  return res?.data ?? null;
};


/* =========================
   BULK DELETE
========================= */
export const bulkDeleteProductSellers = async (data) => {
  console.log("[bulkDeleteProductSellers] REQUEST =>", {
    endpoint: "/sellers/bulk-delete",
    data,
  });

  const res = await apiClient.post("/profiles/sellers/bulk-delete", data);

  console.log("[bulkDeleteProductSellers] RAW RESPONSE =>", res);
  console.log("[bulkDeleteProductSellers] RESPONSE DATA =>", res?.data);

  return res?.data ?? null;
};
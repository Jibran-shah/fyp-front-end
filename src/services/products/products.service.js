import { apiClient } from "../apiClient";

/* =========================
   CREATE PRODUCT
========================= */
export const createProduct = async (data) => {
  console.log("[createProduct] Request:", data);

  const res = await apiClient.post("/products", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return res.data.data;
};

/* =========================
   GET PRODUCTS (LIST)
========================= */
export const getProducts = async (params) => {
  console.log("[getProducts] Params:", params);

  try {
    const res = await apiClient.get("/products", { params });

    console.log("[getProducts] Response:", res.data);

    return {
      data: res.data,
      meta: res.meta
    };
  } catch (error) {
    console.error("[getProducts] Error:", error);
    throw error;
  }
};

/* =========================
   GET BY ID
========================= */
export const getProductById = async (id) => {
  console.log("[getProductById] ID:", id);
  try {
    const res = await apiClient.get(`/products/${id}`);
    console.log("[getProductById] Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("[getProductById] Error:", error);
    throw error;
  }
};

/* =========================
   GET BY CATEGORY
========================= */
export const getProductsByCategory = async (categoryId) => {
  console.log("[getProductsByCategory] Category ID:", categoryId);

  try {
    const res = await apiClient.get(`/products/category/${categoryId}`);

    console.log("[getProductsByCategory] Response:", res.data);

    return res.data.data;
  } catch (error) {
    console.error("[getProductsByCategory] Error:", error);
    throw error;
  }
};

/* =========================
   GET SELLER PRODUCTS
========================= */
export const getMySellerProducts = async () => {
  console.log("[getMySellerProducts] Fetching seller products");

  try {
    const res = await apiClient.get("/products/seller/me");

    console.log("[getMySellerProducts] Response:", res.data);

    return res.data.data;
  } catch (error) {
    console.error("[getMySellerProducts] Error:", error);
    throw error;
  }
};

/* =========================
   UPDATE PRODUCT
========================= */
export const updateProduct = async ({ id, data }) => {
  console.log("[updateProduct] ID:", id);
  console.log("[updateProduct] Payload:", data);

  try {
    const res = await apiClient.patch(`/products/${id}`, data,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    console.log("[updateProduct] Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("[updateProduct] Error:", error);
    throw error;
  }
};

/* =========================
   DELETE PRODUCT
========================= */
export const deleteProduct = async (id) => {
  console.log("[deleteProduct] ID:", id);

  try {
    const res = await apiClient.delete(`/products/${id}`);

    console.log("[deleteProduct] Response:", res.data);

    return res.data;
  } catch (error) {
    console.error("[deleteProduct] Error:", error);
    throw error;
  }
};
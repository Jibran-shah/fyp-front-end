import { apiClient } from "../apiClient";

/* ======================
   CREATE CATEGORY
====================== */
export const createCategory = (data) =>
  apiClient.post("/categories", data);

/* ======================
   GET ALL CATEGORIES
====================== */
export const getCategories = (params) =>
  apiClient.get("/categories", { params });

/* ======================
   GET CATEGORY TREE
====================== */
export const getCategoryTree = (params) =>
  apiClient.get("/categories/tree", { params });

/* ======================
   GET BY ID
====================== */
export const getCategoryById = (id) =>
  apiClient.get(`/categories/${id}`);

/* ======================
   UPDATE CATEGORY
====================== */
export const updateCategory = (id, data) =>
  apiClient.patch(`/categories/${id}`, data);

/* ======================
   DELETE CATEGORY
====================== */
export const deleteCategory = (id) =>
  apiClient.delete(`/categories/${id}`);
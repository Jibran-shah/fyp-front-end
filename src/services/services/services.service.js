import { apiClient } from "../apiClient";

/* =========================================================
   CREATE SERVICE
========================================================= */
export const createService = (data) => {
  return apiClient.post("/services", data);
};

/* =========================================================
   GET ALL SERVICES
========================================================= */
export const getServices = (params) => {
  return apiClient.get("/services", { params });
};

/* =========================================================
   GET MY SERVICES (PROVIDER)
========================================================= */
export const getMyServices = () => {
  return apiClient.get("/services/me");
};

/* =========================================================
   GET BY CATEGORY
========================================================= */
export const getServicesByCategory = (categoryId) => {
  return apiClient.get(`/services/category/${categoryId}`);
};

/* =========================================================
   GET BY ID
========================================================= */
export const getServiceById = (id) => {
  return apiClient.get(`/services/${id}`);
};

/* =========================================================
   UPDATE SERVICE
========================================================= */
export const updateService = ({ id, data }) => {
  return apiClient.patch(`/services/${id}`, data);
};

/* =========================================================
   DELETE SERVICE
========================================================= */
export const deleteService = (id) => {
  return apiClient.delete(`/services/${id}`);
};
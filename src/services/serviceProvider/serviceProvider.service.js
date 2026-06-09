import { apiClient } from "../../axios/apiClient";

/* =========================
   CREATE
========================= */
export const createServiceProvider = async (data) => {
  const res = await apiClient.post("/service-providers", data, {
    headers: { "Content-Type": "multipart/form-data" }
  });

  return res.data.provider;
};

/* =========================
   GET ALL
========================= */
export const getServiceProviders = async (params) => {
  const res = await apiClient.get("/service-providers", { params });
  return res.data.serviceProviders;
};

/* =========================
   GET BY ID
========================= */
export const getServiceProviderById = async (id) => {
  const res = await apiClient.get(`/service-providers/${id}`);
  return res.data.serviceProvider;
};

/* =========================
   UPDATE BY USER
========================= */
export const updateServiceProviderByUser = async (data) => {
  const res = await apiClient.put(
    "/service-providers/byUser",
    data,
    {
      headers: { "Content-Type": "multipart/form-data" }
    }
  );

  return res.data.serviceProvider;
};

/* =========================
   ADMIN / DIRECT UPDATE
========================= */
export const updateServiceProvider = async ({ id, data }) => {
  const res = await apiClient.put(
    `/service-providers/${id}`,
    data
  );

  return res.data.serviceProvider;
};

/* =========================
   DELETE
========================= */
export const deleteServiceProvider = async () => {
  const res = await apiClient.delete("/service-providers");
  return res.data;
};

/* =========================
   BULK DELETE
========================= */
export const bulkDeleteServiceProviders = async (ids) => {
  const res = await apiClient.post(
    "/service-providers/bulk-delete",
    { ids }
  );

  return res.data;
};
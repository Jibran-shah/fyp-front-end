import { apiClient } from "../apiClient";



/* =========================
   CREATE
========================= */
export const createServiceProvider = async (data) => {
  const res = await apiClient.post("/profiles/providers", data, {
    headers: { "Content-Type": "multipart/form-data" }
  });

  return res.data.provider;
};

/* =========================
   GET ALL
========================= */
export const getServiceProviders = async (params) => {
  const res = await apiClient.get("/profiles/providers", { params });
  return res.data.serviceProviders;
};

/* =========================
   GET BY ID
========================= */
export const getServiceProviderById = async (id) => {
  const res = await apiClient.get(`/profiles/providers/${id}`);
  return res.data.serviceProvider;
};

/* =========================
   UPDATE BY USER
========================= */
export const updateServiceProviderByUser = async (data) => {
  const res = await apiClient.put(
    "/profiles/provider/byUser",
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
  const res = await apiClient.delete("/profiles/providers");
  return res.data;
};

/* =========================
   BULK DELETE
========================= */
export const bulkDeleteServiceProviders = async (ids) => {
  const res = await apiClient.post(
    "/profiles/providers/bulk-delete",
    { ids }
  );

  return res.data;
};
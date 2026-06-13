import { apiClient } from "../apiClient";

/* =========================
   CREATE
========================= */
export const createServiceProvider = async (data) => {
  console.log("[createServiceProvider] REQUEST =>", {
    endpoint: "/profiles/providers",
    data,
  });

  const res = await apiClient.post("/profiles/providers", data);

  console.log("[createServiceProvider] RAW RESPONSE =>", res);
  console.log("[createServiceProvider] RESPONSE DATA =>", res?.data);
  console.log("[createServiceProvider] RETURN =>", res?.data);

  return res?.data ?? null;
};


/* =========================
   GET ALL
========================= */
export const getServiceProviders = async (params) => {
  console.log("[getServiceProviders] REQUEST =>", {
    endpoint: "/profiles/providers",
    params,
  });

  const res = await apiClient.get("/profiles/providers", { params });

  console.log("[getServiceProviders] RAW RESPONSE =>", res);
  console.log("[getServiceProviders] RESPONSE DATA =>", res?.data);
  console.log("[getServiceProviders] RETURN =>", res?.data?.serviceProviders);

  return res?.data?.serviceProviders ?? [];
};


/* =========================
   GET BY ID
========================= */
export const getServiceProviderById = async (id) => {
  console.log("[getServiceProviderById] REQUEST =>", {
    endpoint: `/profiles/providers/${id}`,
    id,
  });

  const res = await apiClient.get(`/profiles/providers/${id}`);

  console.log("[getServiceProviderById] RAW RESPONSE =>", res);
  console.log("[getServiceProviderById] RESPONSE DATA =>", res?.data);
  console.log("[getServiceProviderById] RETURN =>", res?.data?.serviceProvider);

  return res?.data?.serviceProvider ?? null;
};


/* =========================
   UPDATE BY USER
========================= */
export const updateServiceProviderByUser = async (data) => {
  console.log("[updateServiceProviderByUser] REQUEST =>", {
    endpoint: "/profiles/provider/byUser",
    data,
  });

  const res = await apiClient.put(
    "/profiles/providers/byUser",
    data
  );

  console.log("[updateServiceProviderByUser] RAW RESPONSE =>", res);
  console.log("[updateServiceProviderByUser] RESPONSE DATA =>", res?.data);
  console.log("[updateServiceProviderByUser] RETURN =>", res?.data?.serviceProvider);

  return res?.data?.serviceProvider ?? null;
};


/* =========================
   ADMIN / DIRECT UPDATE
========================= */
export const updateServiceProvider = async ({ id, data }) => {
  console.log("[updateServiceProvider] REQUEST =>", {
    endpoint: `/service-providers/${id}`,
    id,
    data,
  });

  const res = await apiClient.put(
    `/service-providers/${id}`,
    data
  );

  console.log("[updateServiceProvider] RAW RESPONSE =>", res);
  console.log("[updateServiceProvider] RESPONSE DATA =>", res?.data);
  console.log("[updateServiceProvider] RETURN =>", res?.data?.serviceProvider);

  return res?.data?.serviceProvider ?? null;
};


/* =========================
   DELETE
========================= */
export const deleteServiceProvider = async () => {
  console.log("[deleteServiceProvider] REQUEST => /profiles/providers");

  const res = await apiClient.delete("/profiles/providers");

  console.log("[deleteServiceProvider] RAW RESPONSE =>", res);
  console.log("[deleteServiceProvider] RESPONSE DATA =>", res?.data);

  return res?.data ?? null;
};


/* =========================
   BULK DELETE
========================= */
export const bulkDeleteServiceProviders = async (ids) => {
  console.log("[bulkDeleteServiceProviders] REQUEST =>", {
    endpoint: "/profiles/providers/bulk-delete",
    ids,
  });

  const res = await apiClient.post(
    "/profiles/providers/bulk-delete",
    { ids }
  );

  console.log("[bulkDeleteServiceProviders] RAW RESPONSE =>", res);
  console.log("[bulkDeleteServiceProviders] RESPONSE DATA =>", res?.data);

  return res?.data ?? null;
};
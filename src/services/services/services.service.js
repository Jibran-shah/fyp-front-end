import { apiClient } from "../apiClient";

/* =========================================================
   CREATE SERVICE
========================================================= */
export const createService = async (data) => {
  console.log("[API] createService request:", data);

  const res = await apiClient.post("/services", data);

  console.log("[API] createService response:", res);

  return res;
};

/* =========================================================
   GET ALL SERVICES
========================================================= */
export const getServices = async (params) => {
  console.log("[API] getServices params:", params);

  const res = await apiClient.get("/services", {
    params
  });

  console.log("[API] getServices response:", res);

  return res;
};

/* =========================================================
   GET MY SERVICES (PROVIDER)
========================================================= */
export const getMyServices = async () => {
  console.log("[API] getMyServices request");

  const res = await apiClient.get("/services/me");

  console.log("[API] getMyServices response:", res);

  return res;
};

/* =========================================================
   GET BY CATEGORY
========================================================= */
export const getServicesByCategory = async (
  categoryId
) => {
  console.log(
    "[API] getServicesByCategory categoryId:",
    categoryId
  );

  const res = await apiClient.get(
    `/services/category/${categoryId}`
  );

  console.log(
    "[API] getServicesByCategory response:",
    res
  );

  return res;
};

/* =========================================================
   GET BY ID
========================================================= */
export const getServiceById = async (id) => {
  console.log("[API] getServiceById id:", id);

  const res = await apiClient.get(
    `/services/${id}`
  );

  console.log(
    "[API] getServiceById response:",
    res
  );

  return res;
};

/* =========================================================
   UPDATE SERVICE
========================================================= */
export const updateService = async ({
  id,
  data
}) => {
  console.log("[API] updateService id:", id);
  console.log(
    "[API] updateService payload:",
    data
  );

  const res = await apiClient.patch(
    `/services/${id}`,
    data
  );

  console.log(
    "[API] updateService response:",
    res
  );

  return res;
};

/* =========================================================
   DELETE SERVICE
========================================================= */
export const deleteService = async (id) => {
  console.log("[API] deleteService id:", id);

  const res = await apiClient.delete(
    `/services/${id}`
  );

  console.log(
    "[API] deleteService response:",
    res
  );

  return res;
};
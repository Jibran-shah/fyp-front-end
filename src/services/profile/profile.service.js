import { apiClient } from "../apiClient"

// CREATE PROFILE (multipart supported via axios config elsewhere)
export const createBuyerProfile = async (data) => {
  const res = await apiClient.post("/profiles/buyers", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data.data;
};

// GET MY PROFILE
export const getMyBuyerProfile = async () => {
  const res = await apiClient.get("/profiles/buyers/byUser");
  return res.data.data;
};

// UPDATE PROFILE
export const updateBuyerProfile = async (data) => {
  const res = await apiClient.put("/profiles/buyers", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data.data;
};

// DELETE PROFILE
export const deleteBuyerProfile = async () => {
  const res = await apiClient.delete("/profiles/buyers");
  return res.data;
};

// GET BY ID
export const getBuyerProfileById = async (id) => {
  const res = await apiClient.get(`/profiles/buyers/${id}`);
  return res.data.data;
};

// QUERY LIST
export const getBuyerProfiles = async (params) => {
  const res = await apiClient.get("/profiles/buyers", { params });
  return res.data;
};
import { apiClient } from "../apiClient";

// CREATE PROFILE
export const createBuyerProfile = async (data) => {
  console.log("[createBuyerProfile] REQUEST =>", { endpoint: "/profiles/buyers", data });
  const res = await apiClient.post("/profiles/buyers", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log("[createBuyerProfile] RAW RESPONSE =>", res);
  console.log("[createBuyerProfile] RESPONSE DATA =>", res?.data);
  console.trace()
  return res?.data ?? null;
};

// GET MY PROFILE
export const getMyBuyerProfile = async () => {
  console.log("[getMyBuyerProfile] REQUEST => /profiles/buyers/byUser");

  const res = await apiClient.get("/profiles/buyers/byUser");

  console.log("[getMyBuyerProfile] RAW RESPONSE =>", res);
  console.log("[getMyBuyerProfile] RESPONSE DATA =>", res?.data);

  return res?.data ?? null;
};

// GET FULL PROFILE
export const getFullProfile = async (id) => {
  console.log("[getFullProfile] REQUEST =>", {
    endpoint: `/profiles/buyers/full/${id}`,
    id,
  });

  const res = await apiClient.get(`/profiles/buyers/full/${id}`);

  console.log("[getFullProfile] RAW RESPONSE =>", res);
  console.log("[getFullProfile] RESPONSE DATA =>", res?.data);

  return res?.data ?? null;
};

// UPDATE PROFILE
export const updateBuyerProfile = async (data) => {
  console.log("[updateBuyerProfile] REQUEST =>", {
    endpoint: "/profiles/buyers",
    data,
  });

  const res = await apiClient.put("/profiles/buyers", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  console.log("[updateBuyerProfile] RAW RESPONSE =>", res);
  console.log("[updateBuyerProfile] RESPONSE DATA =>", res?.data);
  console.log("[updateBuyerProfile] RETURN =>", res?.data?.data);

  return res?.data?.data ?? null;
};

// DELETE PROFILE
export const deleteBuyerProfile = async () => {
  console.log("[deleteBuyerProfile] REQUEST => /profiles/buyers");

  const res = await apiClient.delete("/profiles/buyers");

  console.log("[deleteBuyerProfile] RAW RESPONSE =>", res);
  console.log("[deleteBuyerProfile] RESPONSE DATA =>", res?.data);

  return res?.data ?? null;
};

// GET BY ID
export const getBuyerProfileById = async (id) => {
  console.log("[getBuyerProfileById] REQUEST =>", {
    endpoint: `/profiles/buyers/${id}`,
    id,
  });

  const res = await apiClient.get(`/profiles/buyers/${id}`);

  console.log("[getBuyerProfileById] RAW RESPONSE =>", res);
  console.log("[getBuyerProfileById] RESPONSE DATA =>", res?.data);
  console.log("[getBuyerProfileById] RETURN =>", res?.data?.data);

  return res?.data?.data ?? null;
};

// LIST QUERY
export const getBuyerProfiles = async (params) => {
  console.log("[getBuyerProfiles] REQUEST =>", {
    endpoint: "/profiles/buyers",
    params,
  });

  const res = await apiClient.get("/profiles/buyers", { params });

  console.log("[getBuyerProfiles] RAW RESPONSE =>", res);
  console.log("[getBuyerProfiles] RESPONSE DATA =>", res?.data);
  console.log("[getBuyerProfiles] RETURN =>", res?.data?.data);

  return res?.data ?? { data: [] };
};
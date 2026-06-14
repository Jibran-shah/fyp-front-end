import { apiClient } from "../apiClient";

/* =========================
   CREATE DIRECT CHAT
========================= */
export const createDirectChat = async (data) => {
  console.log("[createDirectChat] request data:", data);

  try {
    const res = await apiClient.post("/chat/direct", data);

    console.log("[createDirectChat] response:", res);
    console.log("[createDirectChat] data:", res?.data);

    return res;
  } catch (error) {
    console.error("[createDirectChat] error:", error);
    throw error;
  }
};

/* =========================
   GET USER DIRECT CHATS
========================= */
export const getUserDirectChats = async () => {
  console.log("[getUserDirectChats] fetching chats");

  try {
    const res = await apiClient.get("/chat/direct/user");

    console.log("[getUserDirectChats] response:", res);
    console.log("[getUserDirectChats] data:", res?.data);

    return res;
  } catch (error) {
    console.error("[getUserDirectChats] error:", error);
    throw error;
  }
};

/* =========================
   GET DIRECT CHAT
========================= */
export const getDirectChat = async (chatId) => {
  console.log("[getDirectChat] chatId:", chatId);

  try {
    const res = await apiClient.get(`/chat/direct/${chatId}`);

    console.log("[getDirectChat] response:", res);
    console.log("[getDirectChat] data:", res?.data);

    return res;
  } catch (error) {
    console.error("[getDirectChat] error:", error);
    throw error;
  }
};

/* =========================
   DELETE DIRECT CHAT FOR USER
========================= */
export const deleteDirectChatForUser = async (chatId) => {
  console.log(
    "[deleteDirectChatForUser] chatId:",
    chatId
  );

  try {
    const res = await apiClient.patch(
      `/chat/direct/${chatId}/delete`
    );

    console.log(
      "[deleteDirectChatForUser] response:",
      res
    );
    console.log(
      "[deleteDirectChatForUser] data:",
      res?.data
    );

    return res;
  } catch (error) {
    console.error(
      "[deleteDirectChatForUser] error:",
      error
    );
    throw error;
  }
};

/* =========================
   BLOCK USER
========================= */
export const blockUser = async (chatId) => {
  console.log("[blockUser] chatId:", chatId);

  try {
    const res = await apiClient.patch(
      `/chat/direct/${chatId}/block`
    );

    console.log("[blockUser] response:", res);
    console.log("[blockUser] data:", res?.data);

    return res;
  } catch (error) {
    console.error("[blockUser] error:", error);
    throw error;
  }
};

/* =========================
   UNBLOCK USER
========================= */
export const unblockUser = async (chatId) => {
  console.log("[unblockUser] chatId:", chatId);

  try {
    const res = await apiClient.patch(
      `/chat/direct/${chatId}/unblock`
    );

    console.log("[unblockUser] response:", res);
    console.log("[unblockUser] data:", res?.data);

    return res;
  } catch (error) {
    console.error("[unblockUser] error:", error);
    throw error;
  }
};
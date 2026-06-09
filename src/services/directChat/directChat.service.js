import axios from "../axios";

const directChatApi = {
  createDirectChat: (data) =>
    axios.post("/direct-chats", data),

  getUserDirectChats: () =>
    axios.get("/direct-chats/user"),

  getDirectChat: (chatId) =>
    axios.get(`/direct-chats/${chatId}`),

  deleteDirectChatForUser: (chatId) =>
    axios.patch(`/direct-chats/${chatId}/delete`),

  blockUser: (chatId) =>
    axios.patch(`/direct-chats/${chatId}/block`),

  unblockUser: (chatId) =>
    axios.patch(`/direct-chats/${chatId}/unblock`)
};


export const directChatService = {
  createDirectChat: async (data) => {
    const res = await directChatApi.createDirectChat(data);
    return res.data.data;
  },

  getUserDirectChats: async () => {
    const res = await directChatApi.getUserDirectChats();
    return res.data.data;
  },

  getDirectChat: async (chatId) => {
    const res = await directChatApi.getDirectChat(chatId);
    return res.data.data;
  },

  deleteDirectChatForUser: async (chatId) => {
    const res = await directChatApi.deleteDirectChatForUser(chatId);
    return res.data.data;
  },

  blockUser: async (chatId) => {
    const res = await directChatApi.blockUser(chatId);
    return res.data.data;
  },

  unblockUser: async (chatId) => {
    const res = await directChatApi.unblockUser(chatId);
    return res.data.data;
  }
};
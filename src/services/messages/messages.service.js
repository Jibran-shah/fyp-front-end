import axios from "../axios";

const messagesApi = {
  getChatMessages: (chatId, params) =>
    axios.get(`/messages/chat/${chatId}`, { params }),

  sendMessage: (data) =>
    axios.post("/messages", data),

  editMessage: (messageId, data) =>
    axios.patch(`/messages/${messageId}`, data),

  deleteMessage: (messageId) =>
    axios.delete(`/messages/${messageId}`),

  markMessageAsRead: (messageId) =>
    axios.patch(`/messages/${messageId}/read`),

  markMessageAsDelivered: (messageId) =>
    axios.patch(`/messages/${messageId}/delivered`),

  markChatAsRead: (chatId) =>
    axios.patch(`/messages/chat/${chatId}/read`),

  markChatAsDelivered: (chatId) =>
    axios.patch(`/messages/chat/${chatId}/delivered`),

  markChatAsReadUpTo: (chatId, messageId) =>
    axios.patch(`/messages/chat/${chatId}/read-up-to/${messageId}`)
};


export const messagesService = {
  getChatMessages: async ({ chatId, ...params }) => {
    const res = await messagesApi.getChatMessages(chatId, params);
    return res.data.data;
  },

  sendMessage: async (data) => {
    const res = await messagesApi.sendMessage(data);
    return res.data.data;
  },

  editMessage: async ({ messageId, text }) => {
    const res = await messagesApi.editMessage(messageId, { text });
    return res.data.data;
  },

  deleteMessage: async (messageId) => {
    const res = await messagesApi.deleteMessage(messageId);
    return res.data.data;
  },

  markMessageAsRead: async (messageId) => {
    const res = await messagesApi.markMessageAsRead(messageId);
    return res.data.data;
  },

  markMessageAsDelivered: async (messageId) => {
    const res = await messagesApi.markMessageAsDelivered(messageId);
    return res.data.data;
  },

  markChatAsRead: async (chatId) => {
    const res = await messagesApi.markChatAsRead(chatId);
    return res.data.data;
  },

  markChatAsDelivered: async (chatId) => {
    const res = await messagesApi.markChatAsDelivered(chatId);
    return res.data.data;
  },

  markChatAsReadUpTo: async ({ chatId, messageId }) => {
    const res = await messagesApi.markChatAsReadUpTo(chatId, messageId);
    return res.data.data;
  }
};
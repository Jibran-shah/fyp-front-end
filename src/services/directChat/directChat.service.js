import {apiClient} from "../apiClient";


export const  createDirectChat =  (data) =>
    apiClient.post("/chat/direct", data)

export const  getUserDirectChats = () =>
    apiClient.get("/chat/direct/user")

export const  getDirectChat =  (chatId) =>
    apiClient.get(`/chat/direct/${chatId}`)

export const  deleteDirectChatForUser = (chatId) =>
    apiClient.patch(`/chat/direct/${chatId}/delete`)

export const  blockUser = (chatId) =>
    apiClient.patch(`/chat/direct/${chatId}/block`)

export const  unblockUser = (chatId) =>
    apiClient.patch(`/chat/direct/${chatId}/unblock`)


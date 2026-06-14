import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../../utils/queryKeys";
import * as directChatService  from "../../../services/directChat/directChat.service";

/* -------------------- BLOCK USER -------------------- */
export const useBlockDirectChatUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useBlockDirectChatUser] start", payload);

      const res = await directChatService.blockUser(payload);

      console.log("[useBlockDirectChatUser] response", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useBlockDirectChatUser] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.directChat.all,
      });

      console.log("[useBlockDirectChatUser] cache invalidated");
    },

    onError: (err) => {
      console.error("[useBlockDirectChatUser] error", err);
    },
  });
};

/* -------------------- CREATE CHAT -------------------- */
export const useCreateDirectChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useCreateDirectChat] start", payload);

      const res = await directChatService.createDirectChat(payload);

      console.log("[useCreateDirectChat] response", res);

      return res.data;
    },

    onSuccess: (data) => {
      console.log("[useCreateDirectChat] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.directChat.all,
      });

      console.log("[useCreateDirectChat] cache invalidated");
    },

    onError: (err) => {
      console.error("[useCreateDirectChat] error", err);
    },
  });
};

/* -------------------- DELETE CHAT -------------------- */
export const useDeleteDirectChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (chatId) => {
      console.log("[useDeleteDirectChat] start", chatId);

      const res = await directChatService.deleteDirectChatForUser(chatId);

      console.log("[useDeleteDirectChat] response", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useDeleteDirectChat] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.directChat.all,
      });

      console.log("[useDeleteDirectChat] cache invalidated");
    },

    onError: (err) => {
      console.error("[useDeleteDirectChat] error", err);
    },
  });
};

/* -------------------- GET SINGLE CHAT -------------------- */
export const useGetDirectChat = (chatId) => {
  return useQuery({
    queryKey: queryKeys.directChat.detail(chatId),

    queryFn: async () => {
      console.log("[useGetDirectChat] fetching chatId:", chatId);

      const res = await directChatService.getDirectChat(chatId);

      console.log("[useGetDirectChat] response", res);

      console.log("[useGetDirectChat] data", res?.data);

      return res;
    },

    enabled: !!chatId,

    onError: (err) => {
      console.error("[useGetDirectChat] error", err);
    },
  });
};

/* -------------------- GET USER CHATS -------------------- */
export const useGetUserDirectChats = () => {
  return useQuery({
    queryKey: queryKeys.directChat.list(),

    queryFn: async () => {
      console.log("[useGetUserDirectChats] fetching chats");

      const res = await directChatService.getUserDirectChats();

      console.log("[useGetUserDirectChats] response", res);

      console.log("[useGetUserDirectChats] data", res?.data);

      return res;
    },

    onError: (err) => {
      console.error("[useGetUserDirectChats] error", err);
    },
  });
};

/* -------------------- UNBLOCK USER -------------------- */
export const useUnblockDirectChatUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useUnblockDirectChatUser] start", payload);

      const res = await directChatService.unblockUser(payload);

      console.log("[useUnblockDirectChatUser] response", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useUnblockDirectChatUser] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.directChat.all,
      });

      console.log("[useUnblockDirectChatUser] cache invalidated");
    },

    onError: (err) => {
      console.error("[useUnblockDirectChatUser] error", err);
    },
  });
};
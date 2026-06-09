import { useQuery } from "@tanstack/react-query";
import { messagesService } from "../../../services/messages.service";
import { queryKeys } from "../../../queryKeys";

export const useGetChatMessages = (chatId, params = {}) => {
  return useQuery({
    queryKey: queryKeys.messages.chat(chatId),
    queryFn: () =>
      messagesService.getChatMessages({ chatId, ...params }),
    enabled: !!chatId
  });
};
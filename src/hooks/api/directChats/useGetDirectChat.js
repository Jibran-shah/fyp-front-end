import { useQuery } from "@tanstack/react-query";
import { directChatService } from "../../../services/directChat.service";
import { queryKeys } from "../../../queryKeys";

export const useGetDirectChat = (chatId) => {
  return useQuery({
    queryKey: queryKeys.directChat.detail(chatId),
    queryFn: () => directChatService.getDirectChat(chatId),
    enabled: !!chatId
  });
};
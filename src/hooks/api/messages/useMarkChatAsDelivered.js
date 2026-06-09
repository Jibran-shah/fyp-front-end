import { useMutation } from "@tanstack/react-query";
import { messagesService } from "../../../services/messages/messages.service";



export const useMarkChatAsDelivered = () => {
  return useMutation({
    mutationFn: messagesService.markChatAsDelivered
  });
};
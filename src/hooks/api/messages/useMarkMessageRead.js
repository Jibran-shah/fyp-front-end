import { useMutation } from "@tanstack/react-query";
import { messagesService } from "../../../services/messages/messages.service";

export const useMarkMessageAsRead = () => {
  return useMutation({
    mutationFn: messagesService.markMessageAsRead
  });
};
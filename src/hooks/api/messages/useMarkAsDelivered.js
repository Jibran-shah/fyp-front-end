import { useMutation } from "@tanstack/react-query";
import { messagesService } from "../../../services/messages/messages.service";

export const useMarkMessageAsDelivered = () => {
  return useMutation({
    mutationFn: messagesService.markMessageAsDelivered
  });
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { messagesService } from "../../../services/messages.service";
import { queryKeys } from "../../../queryKeys";

export const useSendMessage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: messagesService.sendMessage,
    onSuccess: (_, vars) => {
      qc.invalidateQueries({
        queryKey: queryKeys.messages.chat(vars.chatId)
      });
    }
  });
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { messagesService } from "../../../services/messages/messages.service";
import { queryKeys } from "../../../utils/queryKeys";



export const useMarkChatAsRead = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: messagesService.markChatAsRead,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.messages.all
      });
    }
  });
};


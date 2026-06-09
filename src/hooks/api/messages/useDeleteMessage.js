import { useMutation, useQueryClient } from "@tanstack/react-query";
import { messagesService } from "../../../services/messages/messages.service";
import { queryKeys } from "../../../utils/queryKeys";


export const useDeleteMessage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: messagesService.deleteMessage,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.messages.all
      });
    }
  });
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { directChatService } from "../../../services/directChat.service";
import { queryKeys } from "../../../queryKeys";

export const useCreateDirectChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: directChatService.createDirectChat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.directChat.all
      });
    }
  });
};
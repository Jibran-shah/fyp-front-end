import { useMutation, useQueryClient } from "@tanstack/react-query";
import { directChatService } from "../../../services/directChat.service";
import { queryKeys } from "../../../queryKeys";

export const useUnblockDirectChatUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: directChatService.unblockUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.directChat.all
      });
    }
  });
};
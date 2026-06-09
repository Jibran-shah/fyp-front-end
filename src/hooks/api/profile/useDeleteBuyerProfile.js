import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

import { deleteBuyerProfile } from "../../../services/profile/profile.service"

export const useDeleteBuyerProfile = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: deleteBuyerProfile,

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["buyer-profile", "me"],
      });
    },

    onError: handleError,
  });
};
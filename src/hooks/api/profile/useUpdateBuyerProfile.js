import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

import { updateBuyerProfile } from "../../../services/profile/profile.service"

export const useUpdateBuyerProfile = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: updateBuyerProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["buyer-profile", "me"],
      });
    },

    onError: handleError,
  });
};
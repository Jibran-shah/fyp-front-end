import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

import { createBuyerProfile } from "../../../services/profile/profile.service"

export const useCreateBuyerProfile = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: createBuyerProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["buyer-profile", "me"],
      });
    },

    onError: handleError,
  });
};
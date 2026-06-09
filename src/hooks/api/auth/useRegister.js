import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { queryKeys } from "../../../utils/queryKeys";

export const useRegister = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.auth.me()
      });
    },

    onError: handleError
  });
};
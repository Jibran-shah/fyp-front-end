import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWithdrawRequest } from "../../../services/withdraw/withdraw.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useCreateWithdrawRequest = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createWithdrawRequest,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.withdraw.all
      });
    },

    onError: handleError
  });
};
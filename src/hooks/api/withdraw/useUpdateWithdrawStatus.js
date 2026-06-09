import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateWithdrawRequestStatus } from "../../../services/withdraw/withdraw.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useUpdateWithdrawStatus = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      updateWithdrawRequestStatus(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.withdraw.all
      });
    },

    onError: handleError
  });
};
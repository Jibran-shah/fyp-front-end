import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { refundPayment } from "../../../api/payments/payments.api";

export const useRefundPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: refundPayment,

    onSuccess: (_, transactionId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.payments.list(),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.payments.detail(transactionId),
      });
    },
  });
};
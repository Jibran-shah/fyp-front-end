import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { createPaymentTransaction } from "../../../api/payments/payments.api";

export const useCreatePaymentTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPaymentTransaction,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.payments.list(),
      });
    },
  });
};
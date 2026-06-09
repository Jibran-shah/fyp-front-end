import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createManualTransaction } from "../../../api/modules/wallet/walletTransactions.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useCreateManualTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createManualTransaction,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.wallet.transactions.all
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.wallet.me()
      });
    }
  });
};
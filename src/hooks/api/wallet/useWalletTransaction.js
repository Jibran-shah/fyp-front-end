import { useQuery } from "@tanstack/react-query";
import { getWalletTransactionById } from "../../../api/modules/wallet/walletTransactions.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useWalletTransaction = (id) => {
  return useQuery({
    queryKey: queryKeys.wallet.transactions.detail(id),
    queryFn: () => getWalletTransactionById(id),
    enabled: !!id,
    select: (res) => res.data?.data
  });
};
import { useQuery } from "@tanstack/react-query";
import { getMyWalletTransactions } from "../../../api/modules/wallet/walletTransactions.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useWalletTransactions = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.wallet.transactions.list(filters),
    queryFn: () => getMyWalletTransactions(filters),
    select: (res) => res.data?.data,
    staleTime: 2 * 60 * 1000
  });
};
import { useQuery } from "@tanstack/react-query";
import { getMyWallet } from "../../../api/modules/wallet/wallet.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useWallet = () => {
  return useQuery({
    queryKey: queryKeys.wallet.me(),
    queryFn: getMyWallet,
    select: (res) => res.data?.data,
    staleTime: 60 * 1000 * 5 // 5 min cache (wallet = semi-static state)
  });
};
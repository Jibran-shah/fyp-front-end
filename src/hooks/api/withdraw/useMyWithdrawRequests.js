import { useQuery } from "@tanstack/react-query";
import { getMyWithdrawRequests } from "../../../services/withdraw/withdraw.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useMyWithdrawRequests = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.withdraw.my(),
    queryFn: () => getMyWithdrawRequests(params),
    select: (res) => res?.data?.data,
    staleTime: 1000 * 60 * 2
  });
};
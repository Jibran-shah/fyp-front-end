import { useQuery } from "@tanstack/react-query";
import { getWithdrawRequestById } from "../../../services/withdraw/withdraw.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useWithdrawRequest = (id, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.withdraw.detail(id),
    queryFn: () => getWithdrawRequestById(id),
    enabled: !!id && enabled,
    select: (res) => res?.data?.data
  });
};
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { getMyPaymentTransactions } from "../../../api/payments/payments.api";

export const useMyPaymentTransactions = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.payments.list(filters),
    queryFn: () => getMyPaymentTransactions(filters),
  });
};
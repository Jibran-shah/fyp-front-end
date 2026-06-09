import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { getPaymentTransactionById } from "../../../api/payments/payments.api";

export const usePaymentTransaction = (id) => {
  return useQuery({
    queryKey: queryKeys.payments.detail(id),
    queryFn: () => getPaymentTransactionById(id),
    enabled: !!id,
  });
};
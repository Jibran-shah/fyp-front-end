import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkout } from "../../../services/checkout/checkout.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useCheckout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: checkout,

    onSuccess: () => {
      // cart must be cleared/refetched after checkout
      queryClient.invalidateQueries({
        queryKey: queryKeys.cart.all
      });

      // orders will change after checkout
      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.all
      });
    }
  });
};
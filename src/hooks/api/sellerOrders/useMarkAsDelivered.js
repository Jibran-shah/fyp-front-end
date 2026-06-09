import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { markAsDelivered } from "../../../services/sellerOrders/sellerOrder.service";

export const useMarkAsDelivered = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAsDelivered,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.all
      });
    }
  });
};
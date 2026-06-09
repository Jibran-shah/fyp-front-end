import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { cancelSellerOrder } from "../../../services/sellerOrders/sellerOrder.service";

export const useCancelSellerOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelSellerOrder,

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
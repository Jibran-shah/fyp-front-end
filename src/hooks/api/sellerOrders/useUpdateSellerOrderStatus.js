import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { updateSellerOrderStatus } from "../../../services/sellerOrders/sellerOrder.service";


export const useUpdateSellerOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      updateSellerOrderStatus(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.detail(variables.id)
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.all
      });
    }
  });
};
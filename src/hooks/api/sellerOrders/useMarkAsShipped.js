import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { markAsShipped } from "../../../services/sellerOrders/sellerOrder.service";

export const useMarkAsShipped = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAsShipped,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all
      });
    }
  });
};
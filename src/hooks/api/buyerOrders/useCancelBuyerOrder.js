import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelBuyerOrder } from "../../../services/buyerOrders/buyerOrders.service";
import { queryKeys } from "../../../utils/queryKeys";


export const useCancelBuyerOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBuyerOrder,

    onSuccess: (_, buyerOrderId) => {
      // refresh list
      queryClient.invalidateQueries({
        queryKey: queryKeys.buyerOrders.all
      });

      // refresh detail
      queryClient.invalidateQueries({
        queryKey: queryKeys.buyerOrders.detail(buyerOrderId)
      });
    }
  });
};
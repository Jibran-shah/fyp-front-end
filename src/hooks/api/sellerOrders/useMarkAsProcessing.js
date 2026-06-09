import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { markAsProcessing } from "../../../services/sellerOrders/sellerOrder.service";

export const useMarkAsProcessing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAsProcessing,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all
      });
    }
  });
};
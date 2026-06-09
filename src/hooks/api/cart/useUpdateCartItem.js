import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { updateCartItem } from "../../../services/cart/cart.service";

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCartItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.cart.all
      });
    }
  });
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { addToCart } from "../../../services/cart/cart.service";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, quantity = 1 }) =>
      addToCart({ productId, quantity }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.cart.all
      });
    }
  });
};
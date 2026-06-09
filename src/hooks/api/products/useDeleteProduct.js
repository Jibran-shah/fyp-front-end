import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../../services/products/products.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.products.all
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.products.seller()
      });
    }
  });
};
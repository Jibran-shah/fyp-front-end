import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../../services/products/products.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.products.all
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.products.detail(variables.id)
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.products.seller()
      });
    }
  });
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../../services/products/products.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,

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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductSeller } from "../../../api/modules/productSeller/productSeller.api";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useCreateProductSeller = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: createProductSeller,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.me()
      });
    },

    onError: handleError
  });
};
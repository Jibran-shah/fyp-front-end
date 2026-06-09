import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductSeller } from "../../../api/modules/productSeller/productSeller.api";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useUpdateProductSeller = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: updateProductSeller,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.me()
      });
    },

    onError: handleError
  });
};
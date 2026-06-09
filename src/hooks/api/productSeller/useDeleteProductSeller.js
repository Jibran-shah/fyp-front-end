import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductSeller } from "../../../api/modules/productSeller/productSeller.api";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useDeleteProductSeller = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: deleteProductSeller,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.all
      });
    },

    onError: handleError
  });
};
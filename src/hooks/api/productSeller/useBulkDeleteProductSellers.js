import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bulkDeleteProductSellers } from "../../../api/modules/productSeller/productSeller.api";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useBulkDeleteProductSellers = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: bulkDeleteProductSellers,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.all
      });
    },

    onError: handleError
  });
};
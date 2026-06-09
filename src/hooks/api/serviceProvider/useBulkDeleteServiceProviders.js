import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bulkDeleteServiceProviders } from "../../../api/modules/serviceProvider/serviceProvider.api";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useBulkDeleteServiceProviders = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: bulkDeleteServiceProviders,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.serviceProvider.all
      });
    },

    onError: handleError
  });
};
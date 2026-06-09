import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteServiceProvider } from "../../../api/modules/serviceProvider/serviceProvider.api";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useDeleteServiceProvider = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: deleteServiceProvider,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.serviceProvider.all
      });
    },

    onError: handleError
  });
};
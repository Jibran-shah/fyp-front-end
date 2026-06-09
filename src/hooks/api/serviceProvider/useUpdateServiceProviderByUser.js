import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateServiceProviderByUser } from "../../../api/modules/serviceProvider/serviceProvider.api";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useUpdateServiceProviderByUser = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: updateServiceProviderByUser,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: queryKeys.serviceProvider.me()
      });
    },

    onError: handleError
  });
};
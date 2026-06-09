import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createService } from "../../../api/modules/services/services.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useCreateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.services.all
      });
    }
  });
};
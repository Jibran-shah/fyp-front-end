import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateService } from "../../../api/modules/services/services.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useUpdateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateService,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.services.all
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.services.detail(variables.id)
      });
    }
  });
};
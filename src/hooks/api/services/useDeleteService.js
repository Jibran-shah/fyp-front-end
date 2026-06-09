import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteService } from "../../../api/modules/services/services.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useDeleteService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.services.all
      });
    }
  });
};
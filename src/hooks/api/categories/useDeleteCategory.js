import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../../services/categories/categories.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useDeleteCategory = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.categories.all
      });
    },

    onError: handleError
  });
};
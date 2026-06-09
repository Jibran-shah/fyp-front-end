import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "../../../services/categories/categories.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useUpdateCategory = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      updateCategory(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.categories.all
      });
    },

    onError: handleError
  });
};
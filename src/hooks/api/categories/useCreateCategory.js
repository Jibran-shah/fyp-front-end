import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../../../services/categories/categories.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useCreateCategory = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.categories.all
      });
    },

    onError: handleError
  });
};
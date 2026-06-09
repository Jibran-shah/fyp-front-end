import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { updateReview } from "../../../api/reviews/reviews.api";

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateReview(id, data),

    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.detail(id),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.my(),
      });
    },
  });
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { deleteReview } from "../../../api/reviews/reviews.api";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReview,

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.my(),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.detail(id),
      });
    },
  });
};
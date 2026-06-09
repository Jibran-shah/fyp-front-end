import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { createReview } from "../../../api/reviews/reviews.api";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReview,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.my(),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.entity(
          variables.entityType,
          variables.entityId
        ),
      });
    },
  });
};
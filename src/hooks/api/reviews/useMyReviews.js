import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { getMyReviews } from "../../../api/reviews/reviews.api";

export const useMyReviews = () => {
  return useQuery({
    queryKey: queryKeys.reviews.my(),
    queryFn: getMyReviews,
  });
};
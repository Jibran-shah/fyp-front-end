import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { getAllReviews } from "../../../api/reviews/reviews.api";

export const useReviews = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.reviews.list(filters),
    queryFn: () => getAllReviews(filters),
  });
};
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../queryKeys";
import { getEntityReviews } from "../../../api/reviews/reviews.api";

export const useEntityReviews = (entityType, entityId, filters = {}) => {
  return useQuery({
    queryKey: queryKeys.reviews.entity(entityType, entityId, filters),
    queryFn: () => getEntityReviews(entityType, entityId, filters),
    enabled: !!entityType && !!entityId,
  });
};
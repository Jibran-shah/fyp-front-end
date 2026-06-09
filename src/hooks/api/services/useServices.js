import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../../api/modules/services/services.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useServices = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.services.list(filters),
    queryFn: () => getServices(filters),
    select: (res) => res.data,
    staleTime: 5 * 60 * 1000
  });
};
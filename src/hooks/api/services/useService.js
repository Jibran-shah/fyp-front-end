import { useQuery } from "@tanstack/react-query";
import { getServiceById } from "../../../api/modules/services/services.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useService = (id) => {
  return useQuery({
    queryKey: queryKeys.services.detail(id),
    queryFn: () => getServiceById(id),
    enabled: !!id,
    select: (res) => res.data
  });
};
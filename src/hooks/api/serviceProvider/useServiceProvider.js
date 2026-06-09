import { useQuery } from "@tanstack/react-query";
import { getServiceProviderById } from "../../../api/modules/serviceProvider/serviceProvider.api";
import { queryKeys } from "../../../utils/queryKeys";

export const useServiceProvider = (id) => {
  return useQuery({
    queryKey: queryKeys.serviceProvider.detail(id),
    queryFn: () => getServiceProviderById(id),
    enabled: !!id
  });
};
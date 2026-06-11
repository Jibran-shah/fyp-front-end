import { useQuery } from "@tanstack/react-query";
import { getServiceProviderById } from "../../../services/serviceProvider/serviceProvider.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useServiceProvider = (id) => {
  return useQuery({
    queryKey: queryKeys.serviceProvider.detail(id),
    queryFn: () => getServiceProviderById(id),
    enabled: !!id
  });
};
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getServiceProviders } from "../../../api/modules/serviceProvider/serviceProvider.api";

export const useMyServiceProvider = (enabled = true) => {
  return useQuery({
    queryKey: queryKeys.serviceProvider.me(),
    queryFn: () =>
      getServiceProviders({ user: "me" }), // backend resolves via auth
    enabled,
    staleTime: 5 * 60 * 1000
  });
};
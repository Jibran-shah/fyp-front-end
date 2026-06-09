import { useQuery } from "@tanstack/react-query";
import { getMyServices } from "../../../api/modules/services/services.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useMyServices = () => {
  return useQuery({
    queryKey: queryKeys.services.my(),
    queryFn: getMyServices,
    select: (res) => res.data
  });
};
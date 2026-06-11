import { useQuery } from "@tanstack/react-query";
import { getMyBuyerProfile } from "../../../services/profile/profile.service"

export const useBuyerProfile = (options = {}) => {
  return useQuery({
    queryKey: ["buyer-profile"],
    queryFn: getMyBuyerProfile,
    enabled: options.enabled,
  });
};
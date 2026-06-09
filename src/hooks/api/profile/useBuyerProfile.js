import { useQuery } from "@tanstack/react-query";
import { getMyBuyerProfile } from "../../../services/profile/profile.service"

export const useBuyerProfile = () => {
  return useQuery({
    queryKey: ["buyer-profile", "me"],
    queryFn: getMyBuyerProfile,
    staleTime: 5 * 60 * 1000,
  });
};
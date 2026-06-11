import { useQuery } from "@tanstack/react-query";
import { getFullProfile } from "../../../services/profile/profile.service"

export const useGetFullProfile = (id) => {
  return useQuery({
    queryKey: ["full-profile", id],
    queryFn: () => getFullProfile(id),
    enabled: !!id,
  });
};
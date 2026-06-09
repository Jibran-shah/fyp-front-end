import { useQuery } from "@tanstack/react-query";
import { getBuyerProfileById } from "../../../services/profile/profile.service"

export const useBuyerProfileById = (id) => {
  return useQuery({
    queryKey: ["buyer-profile", id],
    queryFn: () => getBuyerProfileById(id),
    enabled: !!id,
  });
};
import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "../../../services/bookings/bookings.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useMyBookings = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.bookings.my(params),
    queryFn: () => getMyBookings(params),
    select: (res) => res?.data?.data,
    staleTime: 1000 * 60 * 2
  });
};
import { useQuery } from "@tanstack/react-query";
import { getBookingById } from "../../../services/bookings/bookings.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useBooking = (id, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.bookings.detail(id),
    queryFn: () => getBookingById(id),
    enabled: !!id && enabled,
    select: (res) => res?.data?.data
  });
};
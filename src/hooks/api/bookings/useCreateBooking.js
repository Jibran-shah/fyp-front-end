import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking } from "../../../services/booking/booking.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useCreateBooking = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all
      });
    },

    onError: handleError
  });
};
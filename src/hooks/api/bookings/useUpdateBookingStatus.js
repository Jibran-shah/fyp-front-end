import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookingStatus } from "../../../services/bookings/bookings.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useUpdateBookingStatus = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      updateBookingStatus(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all
      });
    },

    onError: handleError
  });
};
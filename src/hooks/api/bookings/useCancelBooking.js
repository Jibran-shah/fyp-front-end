import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelBooking } from "../../../services/bookings/bookings.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { toast } from "react-toastify";

export const useCancelBooking = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all
      });
    },

    onError: (error)=>handleError(error,toast.error)
  });
};
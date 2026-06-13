import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../../services/bookings/bookings.service";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { toast } from "react-toastify";

export const useDeleteBooking = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all
      });
    },

    onError:(error)=>handleError(error,toast.error)
  });
};
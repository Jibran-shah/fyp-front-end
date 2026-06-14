import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../../utils/queryKeys";

import { 
    getBookingById, 
    getMyBookings, 
    cancelBooking, 
    createBooking, 
    deleteBooking, 
    updateBookingStatus 
} from "../../../services/booking/booking.service";

import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { toast } from "react-toastify";

/* -------------------- SINGLE BOOKING -------------------- */
export const useBooking = (id, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.bookings.detail(id),
    enabled: !!id && enabled,

    queryFn: async () => {
      console.log("[useBooking] fetching id:", id);

      const res = await getBookingById(id);

      console.log("[useBooking] raw response:", res);
      console.log("[useBooking] data:", res?.data?.data);

      return res;
    },

    select: (res) => {
      console.log("[useBooking] select transform:", res?.data?.data);
      return res?.data?.data;
    },
  });
};

/* -------------------- MY BOOKINGS -------------------- */
export const useMyBookings = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.bookings.my(params),

    queryFn: async () => {
      console.log("[useMyBookings] fetching with params:", params);

      const res = await getMyBookings(params);

      console.log("[useMyBookings] response:", res);
      console.log("[useMyBookings] data:", res?.data?.data);

      return res;
    },

    select: (res) => {
      console.log("[useMyBookings] select transform");
      return res?.data?.data;
    },

    staleTime: 1000 * 60 * 2,

    onError: (err) => {
      console.error("[useMyBookings] error:", err);
    },
  });
};

/* -------------------- CREATE BOOKING -------------------- */
export const useCreateBooking = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useCreateBooking] start:", payload);

      const res = await createBooking(payload);

      console.log("[useCreateBooking] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useCreateBooking] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all,
      });

      console.log("[useCreateBooking] cache invalidated");
    },

    onError: (error) => {
      console.error("[useCreateBooking] error:", error);
      handleError(error, toast.error);
    },
  });
};

/* -------------------- CANCEL BOOKING -------------------- */
export const useCancelBooking = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useCancelBooking] start:", id);

      const res = await cancelBooking(id);

      console.log("[useCancelBooking] response:", res);

      return res;
    },

    onSuccess: (data, id) => {
      console.log("[useCancelBooking] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.detail(id),
      });

      console.log("[useCancelBooking] cache invalidated");
    },

    onError: (error) => {
      console.error("[useCancelBooking] error:", error);
      handleError(error, toast.error);
    },
  });
};

/* -------------------- DELETE BOOKING -------------------- */
export const useDeleteBooking = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useDeleteBooking] start:", id);

      const res = await deleteBooking(id);

      console.log("[useDeleteBooking] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useDeleteBooking] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all,
      });

      console.log("[useDeleteBooking] cache invalidated");
    },

    onError: (error) => {
      console.error("[useDeleteBooking] error:", error);
      handleError(error, toast.error);
    },
  });
};

/* -------------------- UPDATE BOOKING STATUS -------------------- */
export const useUpdateBookingStatus = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      console.log("[useUpdateBookingStatus] start:", { id, data });

      const res = await updateBookingStatus(id, data);

      console.log("[useUpdateBookingStatus] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useUpdateBookingStatus] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.bookings.all,
      });

      console.log("[useUpdateBookingStatus] cache invalidated");
    },

    onError: (error) => {
      console.error("[useUpdateBookingStatus] error:", error);
      handleError(error, toast.error);
    },
  });
};
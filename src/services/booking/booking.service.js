import { apiClient } from "../apiClient";

/* =========================
   CREATE BOOKING
========================= */
export const createBooking = (data) =>
  apiClient.post("/bookings", data);

/* =========================
   GET MY BOOKINGS
========================= */
export const getMyBookings = (params) =>
  apiClient.get("/bookings/my", { params });

/* =========================
   GET SINGLE BOOKING
========================= */
export const getBookingById = (bookingId) =>
  apiClient.get(`/bookings/${bookingId}`);

/* =========================
   UPDATE STATUS
========================= */
export const updateBookingStatus = (bookingId, data) =>
  apiClient.patch(`/bookings/${bookingId}/status`, data);

/* =========================
   CANCEL BOOKING
========================= */
export const cancelBooking = (bookingId) =>
  apiClient.patch(`/bookings/${bookingId}/cancel`);

/* =========================
   DELETE BOOKING
========================= */
export const deleteBooking = (bookingId) =>
  apiClient.delete(`/bookings/${bookingId}`);
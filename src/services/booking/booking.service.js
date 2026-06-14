import { apiClient } from "../apiClient";

/* =========================
   CREATE BOOKING
========================= */
export const createBooking = async (data) => {
  console.log("[createBooking] request data:", data);

  const res = await apiClient.post("/bookings", data);

  console.log("[createBooking] response:", res);

  return res;
};

/* =========================
   GET MY BOOKINGS
========================= */
export const getMyBookings = async (params) => {
  console.log("[getMyBookings] params:", params);

  const res = await apiClient.get("/bookings/my", {
    params,
  });

  console.log("[getMyBookings] response:", res);

  return res;
};

/* =========================
   GET SINGLE BOOKING
========================= */
export const getBookingById = async (bookingId) => {
  console.log("[getBookingById] bookingId:", bookingId);

  const res = await apiClient.get(
    `/bookings/${bookingId}`
  );

  console.log("[getBookingById] response:", res);

  return res;
};

/* =========================
   UPDATE STATUS
========================= */
export const updateBookingStatus = async (
  bookingId,
  data
) => {
  console.log(
    "[updateBookingStatus] bookingId:",
    bookingId
  );
  console.log(
    "[updateBookingStatus] data:",
    data
  );

  const res = await apiClient.patch(
    `/bookings/${bookingId}/status`,
    data
  );

  console.log(
    "[updateBookingStatus] response:",
    res
  );

  return res;
};

/* =========================
   CANCEL BOOKING
========================= */
export const cancelBooking = async (bookingId) => {
  console.log("[cancelBooking] bookingId:", bookingId);

  const res = await apiClient.patch(
    `/bookings/${bookingId}/cancel`
  );

  console.log("[cancelBooking] response:", res);

  return res;
};

/* =========================
   DELETE BOOKING
========================= */
export const deleteBooking = async (bookingId) => {
  console.log("[deleteBooking] bookingId:", bookingId);

  const res = await apiClient.delete(
    `/bookings/${bookingId}`
  );

  console.log("[deleteBooking] response:", res);

  return res;
};
import { apiClient } from "../apiClient";

/* =========================
   GET MY BUYER ORDERS
========================= */
export const getMyBuyerOrders = async (params) => {
  console.log("[getMyBuyerOrders] params:", params);

  const res = await apiClient.get("/buyer-orders/my", {
    params,
  });

  console.log("[getMyBuyerOrders] response:", res);
  console.log("[getMyBuyerOrders] data:", res?.data);

  return res;
};

/* =========================
   GET SINGLE BUYER ORDER
========================= */
export const getBuyerOrderById = async (buyerOrderId) => {
  console.log(
    "[getBuyerOrderById] buyerOrderId:",
    buyerOrderId
  );

  const res = await apiClient.get(
    `/buyer-orders/${buyerOrderId}`
  );

  console.log("[getBuyerOrderById] response:", res);
  console.log("[getBuyerOrderById] data:", res?.data);

  return res;
};

/* =========================
   CANCEL BUYER ORDER
========================= */
export const cancelBuyerOrder = async (buyerOrderId) => {
  console.log(
    "[cancelBuyerOrder] buyerOrderId:",
    buyerOrderId
  );

  const res = await apiClient.patch(
    `/buyer-orders/${buyerOrderId}/cancel`
  );

  console.log("[cancelBuyerOrder] response:", res);
  console.log("[cancelBuyerOrder] data:", res?.data);

  return res;
};
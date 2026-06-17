import { toast } from "react-toastify";
import { EVENTS } from "../../../backend/realtime/constants/events.constants";
import { socket } from "./socket.client";
import { citeToast } from "../utils/citeToast";

const listeners = {
  [EVENTS.CHAT.MESSAGE_SEND]: new Set(),
  [EVENTS.CHAT.MESSAGE_DELIVERED]: new Set(),
  [EVENTS.CHAT.MESSAGE_READ]: new Set(),
  [EVENTS.CHAT.TYPING_START]: new Set(),
  [EVENTS.CHAT.TYPING_STOP]: new Set(),
};

/*
=====================================================
INCOMING SOCKET EVENTS (RAW -> DISPATCHER)
=====================================================
*/

socket.on("notification",(data)=>{
  citeToast({
    type: data.type,
    title: data.title,
    message: data.message,
  });
})


socket.on(EVENTS.CHAT.MESSAGE_SEND, (data) => {
  console.log("📩 [SOCKET] MESSAGE_SEND received:", data);
  console.log(
    "👥 Listener count:",
    listeners[EVENTS.CHAT.MESSAGE_SEND].size
  );

  listeners[EVENTS.CHAT.MESSAGE_SEND].forEach((fn) => {
    console.log("➡️ executing MESSAGE_SEND listener");
    fn(data);
  });
});

socket.on(EVENTS.CHAT.MESSAGE_DELIVERED, (data) => {
  console.log("📦 [SOCKET] MESSAGE_DELIVERED received:", data);
  console.log(
    "👥 Listener count:",
    listeners[EVENTS.CHAT.MESSAGE_DELIVERED].size
  );

  listeners[EVENTS.CHAT.MESSAGE_DELIVERED].forEach((fn) => {
    console.log("➡️ executing MESSAGE_DELIVERED listener");
    fn(data);
  });
});

socket.on(EVENTS.CHAT.MESSAGE_READ, (data) => {
  console.log("👀 [SOCKET] MESSAGE_READ received:", data);
  console.log(
    "👥 Listener count:",
    listeners[EVENTS.CHAT.MESSAGE_READ].size
  );

  listeners[EVENTS.CHAT.MESSAGE_READ].forEach((fn) => {
    console.log("➡️ executing MESSAGE_READ listener");
    fn(data);
  });
});

socket.on(EVENTS.CHAT.TYPING_START, (data) => {
  console.log("⌨️ [SOCKET] TYPING_START received:", data);
  console.log(
    "👥 Listener count:",
    listeners[EVENTS.CHAT.TYPING_START].size
  );

  listeners[EVENTS.CHAT.TYPING_START].forEach((fn) => {
    console.log("➡️ executing TYPING_START listener");
    fn(data);
  });
});

socket.on(EVENTS.CHAT.TYPING_STOP, (data) => {
  console.log("🛑 [SOCKET] TYPING_STOP received:", data);
  console.log(
    "👥 Listener count:",
    listeners[EVENTS.CHAT.TYPING_STOP].size
  );

  listeners[EVENTS.CHAT.TYPING_STOP].forEach((fn) => {
    console.log("➡️ executing TYPING_STOP listener");
    fn(data);
  });
});

/*
=====================================================
SUBSCRIPTION API
=====================================================
*/

export const onSocketEvent = (event, handler) => {
  console.log(`➕ [SOCKET] subscribing to: ${event}`);

  if (!listeners[event]) {
    console.error(`❌ Unknown event: ${event}`);
    return;
  }

  listeners[event].add(handler);

  console.log(
    `👥 ${event} listener count:`,
    listeners[event].size
  );
};

export const offSocketEvent = (event, handler) => {
  console.log(`➖ [SOCKET] unsubscribing from: ${event}`);

  if (!listeners[event]) {
    console.error(`❌ Unknown event: ${event}`);
    return;
  }

  listeners[event].delete(handler);

  console.log(
    `👥 ${event} listener count:`,
    listeners[event].size
  );
};
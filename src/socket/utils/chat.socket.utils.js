import { EVENTS } from "../../../../backend/realtime/constants/events.constants";
import { onSocketEvent, offSocketEvent } from "../socket.events";

/* =========================================================
   REGISTER CHAT SOCKET LISTENERS
========================================================= */
export const registerChatSocket = (handlers = {}) => {
  console.log("📝 [chat.socket] register");
  console.log("🧾 handlers:", handlers);
  console.log("Handlers From:",handlers.from);

  Object.entries({
    [EVENTS.CHAT.MESSAGE_SEND]: handlers.onNewMessage,
    [EVENTS.CHAT.MESSAGE_DELIVERED]: handlers.onDelivered,
    [EVENTS.CHAT.MESSAGE_READ]: handlers.onRead,
    [EVENTS.CHAT.TYPING_START]: handlers.onTypingStart,
    [EVENTS.CHAT.TYPING_STOP]: handlers.onTypingStop,
  }).forEach(([event, handler]) => {
    if (!handler) {
      console.warn(`⚠️ Missing handler for ${event}`);
      return;
    }
    console.log(`➕ Registering ${event}`);
    onSocketEvent(event, handler);
  });
};

/* =========================================================
   UNREGISTER CHAT SOCKET LISTENERS
========================================================= */

export const unregisterChatSocket = (handlers = {}) => {
  console.log("🗑️ [chat.socket] unregister");

  const {
    onNewMessage,
    onDelivered,
    onRead,
    onTypingStart,
    onTypingStop,
  } = handlers;

  if (onNewMessage) {
    console.log(
      "➖ Unregistering:",
      EVENTS.CHAT.MESSAGE_SEND,
      onNewMessage.name
    );

    offSocketEvent(EVENTS.CHAT.MESSAGE_SEND, onNewMessage);
  }

  if (onDelivered) {
    console.log(
      "➖ Unregistering:",
      EVENTS.CHAT.MESSAGE_DELIVERED,
      onDelivered.name
    );

    offSocketEvent(EVENTS.CHAT.MESSAGE_DELIVERED, onDelivered);
  }

  if (onRead) {
    console.log(
      "➖ Unregistering:",
      EVENTS.CHAT.MESSAGE_READ,
      onRead.name
    );

    offSocketEvent(EVENTS.CHAT.MESSAGE_READ, onRead);
  }

  if (onTypingStart) {
    console.log(
      "➖ Unregistering:",
      EVENTS.CHAT.TYPING_START,
      onTypingStart.name
    );

    offSocketEvent(EVENTS.CHAT.TYPING_START, onTypingStart);
  }

  if (onTypingStop) {
    console.log(
      "➖ Unregistering:",
      EVENTS.CHAT.TYPING_STOP,
      onTypingStop.name
    );

    offSocketEvent(EVENTS.CHAT.TYPING_STOP, onTypingStop);
  }

  console.log("✅ [chat.socket] unregister complete");
};
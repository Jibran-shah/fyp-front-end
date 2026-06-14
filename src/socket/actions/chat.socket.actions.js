import { socketEmit } from "../socket.manager";
import { EVENTS } from "../../../../backend/realtime/constants/events.constants";


export const sendMessage = ({
  roomId,
  content,
  tempId,
  userId, // 👈 ADD THIS
  type = "text",
  attachments = [],
}) => {
  console.log("[chat.socket] sendMessage:", {
    roomId,
    content,
    tempId,
    userId,
    type,
    attachments,
  });

  socketEmit(EVENTS.CHAT.MESSAGE_SEND, {
    roomId,
    content,
    tempId,
    senderId: userId, // 👈 ALSO SEND TO BACKEND
    type,
    attachments,
  });
};

/* =========================================================
   MARK DELIVERED
========================================================= */

export const markDelivered = ({ messageId, chatId }) => {
  console.log("[chat.socket] markDelivered:", { messageId, chatId });

  socketEmit(EVENTS.CHAT.MESSAGE_DELIVERED, {
    messageId,
    chatId,
  });
};

/* =========================================================
   MARK READ
========================================================= */

export const markRead = ({ messageId, chatId }) => {
  console.log("[chat.socket] markRead:", { messageId, chatId });

  socketEmit(EVENTS.CHAT.MESSAGE_READ, {
    messageId,
    chatId,
  });
};

/* =========================================================
   TYPING START
========================================================= */

export const typingStart = (chatId) => {
  console.log("[chat.socket] typingStart:", chatId);

  socketEmit(EVENTS.CHAT.TYPING_START, {
    chatId,
  });
};

/* =========================================================
   TYPING STOP
========================================================= */

export const typingStop = (chatId) => {
  console.log("[chat.socket] typingStop:", chatId);

  socketEmit(EVENTS.CHAT.TYPING_STOP, {
    chatId,
  });
};
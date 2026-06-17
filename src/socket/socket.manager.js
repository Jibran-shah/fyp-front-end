import { socket } from "./socket.client";

/* ---------------------------
   CONNECT
----------------------------*/

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
  }

  // prevent duplicate listeners
  socket.off("connect");
  socket.off("disconnect");
  socket.offAny(); // 👈 important: clears previous global listeners

  socket.on("connect", () => {
    console.log("🟢 socket connected:", socket.id);
  });

  socket.on("disconnect", (reason) => {
    console.log("🔴 socket disconnected:", reason);
  });

  /**
   * ==========================================
   * 📥 LOG ALL INCOMING EVENTS (DEBUG MODE)
   * ==========================================
   */
  socket.onAny((event, ...args) => {
    console.log("📥 [SOCKET EVENT RECEIVED]");
    console.log("➡️ Event:", event);
    console.log("🧾 Data:", args);
  });
};

export const disconnectSocket = () => {
  console.log("🧹 disconnecting socket...");

  socket.removeAllListeners();
  socket.disconnect();
};

export const socketEmit = (event, payload, ack) => {
  if (!socket) {
    console.warn(`[socketEmit] Socket not initialized: ${event}`);
    return false;
  }

  if (!socket.connected) {
    console.warn(`[socketEmit] Socket disconnected: ${event}`);
    return false;
  }
  
  console.log(`[socketEmit] ${event}`, payload);

  if (typeof ack === "function") {
    socket.emit(event, payload, ack);
  } else {
    socket.emit(event, payload);
  }

  return true;
};
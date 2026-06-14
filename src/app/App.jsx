import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRoutes from "../routes/AppRoutes";
import AppLoader from "../components/common/AppLoader";
import { useAuthInit } from "../hooks/api/auth/useAuthInit";
import { connectSocket } from "../socket/socket.manager";

import {
  registerChatSocket,
  unregisterChatSocket,
} from "../socket/utils/chat.socket.utils";

import {
  handleAppNewMessage,
} from "../socket/handlers/chatApp.handlers";

export default function App() {
  useAuthInit();

  const authLoading = useSelector((state) => state.ui.authLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log("APP authLoading,isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) return;
    console.log("[App] connecting socket...");
    console.log("[App] handler",handleAppNewMessage)
    connectSocket();
    const appHandlers = {
      onNewMessage: handleAppNewMessage
    };

    registerChatSocket(appHandlers);
    return () => {
      console.log("[App] cleaning socket listeners...");
      unregisterChatSocket(appHandlers);
    };
  }, [isAuthenticated]);

  if (authLoading) {
    return <AppLoader />;
  }

  return <AppRoutes />;
}
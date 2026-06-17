import { useEffect, useMemo } from "react";
import { Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

import { useGetChatMessagesInfinite } from "../../../hooks/api/messages/messages.hooks";

import {
  registerChatSocket,
  unregisterChatSocket,
} from "../../../socket/utils/chat.socket.utils";

import * as chatHandlers from "../../../socket/handlers/chatPage.handlers";
import { sendMessage } from "../../../socket/actions/chat.socket.actions";

/**
 * Reusable Chat Container
 * - Does NOT depend on routing
 * - Fills parent container space
 * - Accepts chat + chatId as props
 */
export default function ChatContainer({ chat }) {
  const chatId = chat?.id ||chat?._id;
  const { user } = useSelector((state) => state.auth);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetChatMessagesInfinite(chatId);

  const messages =
    data?.pages?.flatMap((page) => page.messages || []) || [];

  // stable socket handlers
  const handlers = useMemo(
    () => ({
      from: "Chat Container",
      onNewMessage: chatHandlers.handleNewMessage,
      onDelivered: chatHandlers.handleDelivered,
      onRead: chatHandlers.handleRead,
      onTypingStart: chatHandlers.handleTypingStart,
      onTypingStop: chatHandlers.handleTypingStop,
    }),
    []
  );

  useEffect(() => {
    if (!chatId) return;

    registerChatSocket(handlers);

    return () => {
      unregisterChatSocket(handlers);
    };
  }, [chatId, handlers]);

  const otherParticipant = useMemo(() => {
    if (!chat?.participants) return null;
    return chat.participants.find(
      (p) => p?._id !== (user?._id || user?.id)
    );
  }, [chat, user]);

  const title =
    otherParticipant?.baseProfile?.fullName || "New Chat";

  const handleSend = (text) => {
    const tempId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    sendMessage({
      roomId: chatId,
      content: text,
      tempId,
      senderId: user?.id,
      receiverId:otherParticipant._id
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      {/* Header */}
      <ChatHeader title={title} />

      {/* Messages (flex grow area) */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0, // IMPORTANT for scroll inside flex
          display: "flex",
        }}
      >
        <MessageList
          messages={messages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </Box>

      {/* Input fixed at bottom */}
      <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
        <MessageInput onSend={handleSend} />
      </Box>
    </Paper>
  );
}
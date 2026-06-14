import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";
import ChatHeader from "../../components/page/chat/ChatHeader";
import MessageList from "../../components/page/chat/MessageList";
import MessageInput from "../../components/page/chat/MessageInput";
import { useGetChatMessagesInfinite } from "../../hooks/api/messages/messages.hooks";
import {
  registerChatSocket,
  unregisterChatSocket,
} from "../../socket/utils/chat.socket.utils";

import * as chatHandlers from "../../socket/handlers/chatPage.handlers";

import { sendMessage } from "../../socket/actions/chat.socket.actions";
import { useSelector } from "react-redux";

export default function ChatPage() {
  console.log("🔥 [ChatPage] Component rendered");

  const { id } = useParams();
  console.log("🆔 [ChatPage] chat id:", id);

  const { user } = useSelector((state) => state.auth);
  console.log("👤 [ChatPage] user:", user);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetChatMessagesInfinite(id);

  console.log("📦 [ChatPage] query data:", data);

  const messages =
    data?.pages?.flatMap((page) => page.messages || []) || [];

  console.log("💬 [ChatPage] messages count:", messages.length);
  console.table(
    messages.map((m) => ({
      id: m._id || m.tempId,
      text: m.text,
      createdAt: m.createdAt,
    }))
  );

  useEffect(() => {
    console.log("🚀 [ChatPage] Registering socket handlers");

    console.log("📥 Imported handlers:");
    console.log("handleNewMessage:", chatHandlers.handleNewMessage);
    console.log("handleDelivered:", chatHandlers.handleDelivered);
    console.log("handleRead:", chatHandlers.handleRead);
    console.log("handleTypingStart:", chatHandlers.handleTypingStart);
    console.log("handleTypingStop:", chatHandlers.handleTypingStop);

    const handlers = {
      onNewMessage: chatHandlers.handleNewMessage,
      onDelivered: chatHandlers.handleDelivered,
      onRead: chatHandlers.handleRead,
      onTypingStart: chatHandlers.handleTypingStart,
      onTypingStop: chatHandlers.handleTypingStop
    };

    console.log("🧾 Handlers object:", handlers);

    registerChatSocket(handlers);

    console.log("✅ [ChatPage] Socket handlers registered");

    return () => {
      console.log("🧹 [ChatPage] Unregistering socket handlers");

      unregisterChatSocket(handlers);

      console.log("❌ [ChatPage] Socket handlers unregistered");
    };
  }, [id]);

  const handleSend = (text) => {
    console.log("📨 [ChatPage] Sending message:", text);

    const tempId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    console.log("🆔 Generated tempId:", tempId);

    sendMessage({
      roomId: id,
      content: text,
      tempId,
      userId: user?.id,
    });

    console.log("📤 sendMessage called");
  };

  return (
    <PageContainer>
      <Paper
        sx={{
          height: "75vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatHeader />

        <MessageList
          messages={messages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />

        <MessageInput onSend={handleSend} />
      </Paper>
    </PageContainer>
  );
}
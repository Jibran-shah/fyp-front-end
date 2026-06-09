import { Paper } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

import ChatHeader from "../../components/chat/ChatHeader";
import MessageList from "../../components/chat/MessageList";
import MessageInput from "../../components/chat/MessageInput";

export default function ChatPage() {
  const messages = [];

  return (
    <PageContainer>
      <Paper
        sx={{
          height: "75vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <ChatHeader />

        <MessageList messages={messages} />

        <MessageInput />
      </Paper>
    </PageContainer>
  );
}
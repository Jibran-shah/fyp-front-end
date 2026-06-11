import { Paper } from "@mui/material";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";

import ChatHeader from "../../components/page/chat/ChatHeader";
import MessageList from "../../components/page/chat/MessageList";

import MessageInput from "../../components/page/chat/MessageInput";

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
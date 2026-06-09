import { Box } from "@mui/material";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatWindow({
  title,
  messages = [],
  onSendMessage,
  onOpenMembers,
  onOpenInfo
}) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <ChatHeader
        title={title}
        onOpenMembers={onOpenMembers}
        onOpenInfo={onOpenInfo}
      />

      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        <MessageList messages={messages} />
      </Box>

      <MessageInput onSend={onSendMessage} />
    </Box>
  );
}
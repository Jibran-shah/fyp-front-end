import { Stack, Typography } from "@mui/material";
import MessageBubble from "./MessageBubble";

export default function MessageList({ messages = [] }) {
  if (!messages.length) {
    return <Typography>No messages yet</Typography>;
  }

  return (
    <Stack spacing={2}>
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
    </Stack>
  );
}
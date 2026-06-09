import { Paper, Typography, Stack } from "@mui/material";
import MessageActions from "./MessageActions";

export default function MessageBubble({ message }) {
  return (
    <Stack
      sx={{
        alignSelf: message.isMine ? "flex-end" : "flex-start",
        maxWidth: "60%"
      }}
      spacing={0.5}
    >
      <Paper
        sx={{
          p: 1.5,
          bgcolor: message.isMine ? "primary.main" : "grey.200",
          color: message.isMine ? "#fff" : "#000"
        }}
      >
        <Typography variant="body2">
          {message.content}
        </Typography>
      </Paper>

      {/* optional actions */}
      <MessageActions
        onEdit={message.isMine}
        onDelete={message.isMine}
      />
    </Stack>
  );
}
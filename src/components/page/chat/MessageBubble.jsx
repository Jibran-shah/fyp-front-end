import { Paper, Typography, Stack } from "@mui/material";
import MessageActions from "./MessageActions";
import {useSelector} from "react-redux"
export default function MessageBubble({ message }) {
  const {user} = useSelector((state)=>state.auth)
  const isMine = message?.senderId?._id === user?.id;

  return (
    <Stack
      sx={{
        alignSelf: isMine ? "flex-end" : "flex-start",
        maxWidth: "60%"
      }}
      spacing={0.5}
    >
      <Paper
        sx={{
          p: 1.5,
          bgcolor: isMine ? "primary.main" : "grey.200",
          color: isMine ? "#fff" : "#000"
        }}
      >
        <Typography variant="body2">
          {message.text}
        </Typography>
      </Paper>
      <MessageActions/>
        {/* // onEdit={message.isMine}
        // onDelete={message.isMine} */}
      
    </Stack>
  );
}
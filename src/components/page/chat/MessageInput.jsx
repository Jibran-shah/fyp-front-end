import { Box, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend?.(text);
    setText("");
  };

  return (
    <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          size="small"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
        />

        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Stack>
    </Box>
  );
}
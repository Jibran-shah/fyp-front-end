import { Box, TextField, IconButton, Paper, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    onSend?.(trimmed);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        p: 1.5,
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1.5,
          py: 0.5,
          borderRadius: 999,
          border: "1px solid",
          borderColor: "divider",
          transition: "0.2s",
          "&:focus-within": {
            borderColor: "primary.main",
            boxShadow: "0 0 0 2px rgba(25,118,210,0.15)",
          },
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={4}
          variant="standard"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          InputProps={{
            disableUnderline: true,
            sx: {
              px: 1,
              fontSize: "0.95rem",
            },
          }}
        />

        <Stack direction="row" alignItems="center">
          <IconButton
            onClick={handleSend}
            disabled={!text.trim()}
            sx={{
              bgcolor: "primary.main",
              color: "white",
              ml: 1,
              width: 36,
              height: 36,
              "&:hover": {
                bgcolor: "primary.dark",
              },
              "&.Mui-disabled": {
                bgcolor: "action.disabledBackground",
                color: "action.disabled",
              },
            }}
          >
            <SendIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
}
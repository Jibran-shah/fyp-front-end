import { Paper, Typography, Stack, Box } from "@mui/material";
import { useSelector } from "react-redux";
import MessageActions from "./MessageActions";

export default function MessageBubble({ message }) {
  const { user } = useSelector((state) => state.auth);

  const isMine =
    (message?.senderId?._id || message?.senderId) ===
    (user?._id || user?.id);

  const time = message?.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <Stack
      sx={{
        alignSelf: isMine ? "flex-end" : "flex-start",
        maxWidth: {
          xs: "85%",
          sm: "75%",
          md: "65%",
        },
        mb: 0.5,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          px: 1.5,
          py: 1,

          borderRadius: "18px", // fully rounded

          bgcolor: isMine ? "primary.main" : "background.paper",
          color: isMine ? "primary.contrastText" : "text.primary",

          border: isMine ? "none" : "1px solid",
          borderColor: "divider",

          boxShadow: isMine
            ? "0 2px 8px rgba(0,0,0,0.12)"
            : "0 1px 3px rgba(0,0,0,0.06)",

          wordBreak: "break-word",
          overflowWrap: "break-word",

          position: "relative",

          transition: "all 0.15s ease",

          "&:hover": {
            boxShadow: isMine
              ? "0 4px 12px rgba(0,0,0,0.16)"
              : "0 3px 8px rgba(0,0,0,0.08)",
          },
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "0.95rem",
            lineHeight: 1.45,
            whiteSpace: "pre-wrap",
          }}
        >
          {message.text}

          {time && (
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",

                ml: 1,
                mt: 0.5,

                float: "right",

                fontSize: "0.68rem",
                lineHeight: 1,

                opacity: 0.75,

                color: isMine
                  ? "rgba(255,255,255,0.85)"
                  : "text.secondary",
              }}
            >
              {time}

              {/* Read receipts example */}
              {/* {isMine && (
                <Box component="span" sx={{ ml: 0.4 }}>
                  ✓✓
                </Box>
              )} */}
            </Box>
          )}
        </Typography>
      </Paper>

      {/* Show only on hover later */}
      {/* <MessageActions /> */}
    </Stack>
  );
}
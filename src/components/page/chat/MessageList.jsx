import { useEffect, useRef } from "react";
import { Box, Stack, Typography, CircularProgress } from "@mui/material";
import MessageBubble from "./MessageBubble";

export default function MessageList({
  messages = [],
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  /* =========================
     INFINITE SCROLL (OLDER MSGS)
  ========================= */
  useEffect(() => {
    if (!topRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage?.();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(topRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  /* =========================
     AUTO SCROLL TO BOTTOM
  ========================= */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  /* =========================
     EMPTY STATE
  ========================= */
  if (!messages.length) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          No messages yet. Start the conversation 🚀
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        px: 2,
        py: 2,
        bgcolor: "background.default",
        scrollBehavior: "smooth",

        /* nicer scrollbar */
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,0.15)",
          borderRadius: "10px",
        },
      }}
    >
      {/* TOP OBSERVER (load older messages) */}
      <div ref={topRef} />

      {/* LOADING MORE (top indicator like Telegram) */}
      {isFetchingNextPage && (
        <Stack alignItems="center" sx={{ py: 1 }}>
          <CircularProgress size={18} />
        </Stack>
      )}

      {/* MESSAGES */}
      <Stack spacing={1}>
        {messages.map((msg, index) => (
          <MessageBubble
            key={msg._id || msg.tempId || index}
            message={msg}
          />
        ))}
      </Stack>

      {/* BOTTOM ANCHOR */}
      <div ref={bottomRef} />
    </Box>
  );
}
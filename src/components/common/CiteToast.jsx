// components/toast/CiteToast.jsx

import {
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";

const typeIcons = {
  success: <CheckCircleIcon color="success" />,
  error: <ErrorIcon color="error" />,
  info: <InfoIcon color="info" />,
  warning: <WarningIcon color="warning" />,
};

export default function CiteToast({
  title,
  message,
  type = "info",
  closeToast,
}) {
  return (
    <Box
      sx={{
        width: 340,
        bgcolor: "background.paper",
        borderRadius: 4,
        p: 1.5,
        boxShadow: 8,
        display: "flex",
        gap: 1.5,
        alignItems: "flex-start",
        position: "relative",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 5,
          height: "100%",
          bgcolor:
            type === "success"
              ? "success.main"
              : type === "error"
              ? "error.main"
              : type === "warning"
              ? "warning.main"
              : "primary.main",
        },
      }}
    >
      {/* Cite Logo */}
      <Avatar
        src="/logo.png"
        variant="rounded"
        sx={{
          width: 48,
          height: 48,
          borderRadius: 3,
        }}
      />

      <Box flex={1}>
        <Box display="flex" alignItems="center" gap={1}>
          {typeIcons[type]}

          <Typography
            fontWeight={700}
            fontSize={15}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={0.5}
        >
          {message}
        </Typography>
      </Box>

      <IconButton
        size="small"
        onClick={closeToast}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
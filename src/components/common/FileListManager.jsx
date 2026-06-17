import { useMemo, useEffect } from "react";
import {
  Box,
  Stack,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function FileListManager({
  value = [],
  onChange,
  label = "Files",
  renderPreview = true,
  removable = true,
}) {
  // Ensure value is always an array
  const files = Array.isArray(value) ? value.filter(Boolean) : [];

  // =========================
  // REMOVE ITEM
  // =========================
  const handleRemove = (index) => {
    const updated = files.filter((_, i) => i !== index);
    onChange?.(updated);
  };

  // =========================
  // GET DISPLAY NAME
  // =========================
  const getName = (item) => {
    if (!item) return "";

    if (item instanceof File) {
      return item.name;
    }

    return (
      item.name ||
      item.title ||
      item.filename ||
      item.originalName ||
      "Unnamed file"
    );
  };

  // =========================
  // IS IMAGE
  // =========================
  const isImage = (item) => {
    if (!item) return false;

    if (item instanceof File) {
      return item.type?.startsWith("image/");
    }

    return (
      item.type?.startsWith?.("image/") ||
      Boolean(item.url)
    );
  };

  // =========================
  // PREVIEW URLS
  // Avoid repeatedly creating object URLs
  // =========================
  const previews = useMemo(() => {
    return files.map((item) => {
      if (item instanceof File && item.type?.startsWith("image/")) {
        return URL.createObjectURL(item);
      }

      return item?.url || null;
    });
  }, [files]);

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      previews.forEach((url, index) => {
        if (files[index] instanceof File && url) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [previews, files]);

  return (
    <Box>
      {label && (
        <Typography
          variant="subtitle2"
          mb={1}
          fontWeight={600}
        >
          {label}
        </Typography>
      )}

      {files.length === 0 ? (
        <Typography
          fontSize={12}
          color="text.secondary"
        >
          No files selected
        </Typography>
      ) : (
        <Stack spacing={1}>
          {files.map((item, index) => (
            <Paper
              key={
                item.id ||
                item._id ||
                `${getName(item)}-${index}`
              }
              variant="outlined"
              sx={{
                p: 1.25,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderRadius: 2,
              }}
            >
              {/* LEFT SIDE */}
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ minWidth: 0 }}
              >
                {/* IMAGE PREVIEW */}
                {renderPreview &&
                  isImage(item) &&
                  previews[index] && (
                    <Box
                      component="img"
                      src={previews[index]}
                      alt={getName(item)}
                      sx={{
                        width: 48,
                        height: 48,
                        objectFit: "cover",
                        borderRadius: 1.5,
                        flexShrink: 0,
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    />
                  )}

                {/* FILE NAME */}
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    noWrap
                  >
                    {getName(item)}
                  </Typography>

                  {item instanceof File && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {(item.size / 1024 / 1024).toFixed(2)} MB
                    </Typography>
                  )}
                </Box>
              </Stack>

              {/* REMOVE BUTTON */}
              {removable && (
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleRemove(index)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
            </Paper>
          ))}
        </Stack>
      )}
    </Box>
  );
}
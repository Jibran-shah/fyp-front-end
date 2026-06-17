import { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Chip,
  Paper,
} from "@mui/material";

export default function FileInputField({
  label = "Upload File",
  value,
  onChange,
  multiple = false,
  maxFiles = 10,
  maxSizeMB = 5,
  accept = "*/*",
}) {
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const inputId = `file-input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  // =========================
  // VALIDATION
  // =========================
  const validateFiles = (files) => {
    setError("");

    const fileArray = Array.from(files || []).filter(Boolean);

    if (multiple && fileArray.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files`);
      return null;
    }

    const oversized = fileArray.find(
      (file) => file.size > maxSizeMB * 1024 * 1024
    );

    if (oversized) {
      setError(`Each file must be under ${maxSizeMB}MB`);
      return null;
    }

    return fileArray;
  };

  // =========================
  // CHANGE HANDLER (RHF SAFE)
  // =========================
  const handleChange = (e) => {
    const files = e.target.files;
    if (!files?.length) return;

    const validated = validateFiles(files);
    if (!validated) return;

    if (multiple) {
      const prev = Array.isArray(value) ? value.filter(Boolean) : [];

      const merged = [...prev, ...validated].filter((f) => f?.name);

      onChange?.(merged);
    } else {
      onChange?.(validated[0] || null);
    }

    // reset so same file can be selected again
    e.target.value = null;
  };

  // =========================
  // SAFE NORMALIZATION
  // =========================
  const normalizedValue = multiple
    ? Array.isArray(value)
      ? value.filter((f) => f?.name)
      : []
    : value && value?.name
    ? value
    : null;

  const hasValue = multiple
    ? normalizedValue.length > 0
    : !!normalizedValue?.name;

  // =========================
  // REMOVE FILE (MULTIPLE)
  // =========================
  const handleRemove = (index) => {
    if (!multiple) return;

    const updated = normalizedValue.filter((_, i) => i !== index);

    onChange?.(updated.length ? updated : []);
  };

  return (
    <Box>
      <Typography variant="subtitle2" mb={1} fontWeight={600}>
        {label}
      </Typography>

      <Stack spacing={1.2}>
        {/* INPUT */}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          style={{ display: "none" }}
          id={inputId}
        />

        {/* BUTTON */}
        <label htmlFor={inputId}>
          <Button
            variant="contained"
            component="span"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
            }}
          >
            {multiple ? "Upload Files" : "Upload File"}
          </Button>
        </label>

        {/* ERROR */}
        {error && (
          <Typography color="error" fontSize={12}>
            {error}
          </Typography>
        )}

        {/* MULTIPLE FILE PREVIEW */}
        {multiple && hasValue && (
          <Paper
            variant="outlined"
            sx={{
              p: 1,
              borderRadius: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              bgcolor: "grey.50",
            }}
          >
            {normalizedValue.map((file, idx) =>
              file?.name ? (
                <Chip
                  key={`${file.name}-${idx}`}
                  label={file.name}
                  size="small"
                  onDelete={() => handleRemove(idx)}
                />
              ) : null
            )}
          </Paper>
        )}

        {/* SINGLE FILE PREVIEW */}
        {!multiple && hasValue && normalizedValue?.name && (
          <Paper
            variant="outlined"
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: "grey.50",
            }}
          >
            <Typography fontSize={13}>
              📄 {normalizedValue.name}
            </Typography>
          </Paper>
        )}
      </Stack>
    </Box>
  );
}
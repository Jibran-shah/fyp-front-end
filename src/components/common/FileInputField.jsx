import { useRef, useState } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

export default function FileInputField({
  label = "Upload File",
  value,
  onChange,
  multiple = false,
  maxFiles = 1,
  maxSizeMB = 5,
  accept = "*/*"
}) {
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const inputId = `file-input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  // =========================
  // VALIDATION
  // =========================
  const validateFiles = (files) => {
    setError("");

    const fileArray = Array.from(files);

    if (multiple && fileArray.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files`);
      return null;
    }

    if (!multiple && fileArray.length > 1) {
      setError("Only one file is allowed");
      return null;
    }

    const oversized = fileArray.find(
      (file) => file.size > maxSizeMB * 1024 * 1024
    );

    if (oversized) {
      setError(`Each file must be under ${maxSizeMB}MB`);
      return null;
    }

    return multiple ? fileArray : fileArray[0];
  };

  // =========================
  // CHANGE HANDLER
  // =========================
  const handleChange = (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    const validated = validateFiles(files);

    if (!validated) return;

    console.log("[FileInputField] selected:", validated);

    // IMPORTANT: RHF-compatible contract
    onChange?.(validated);

    e.target.value = null;
  };

  // =========================
  // NORMALIZE VALUE (RHF SAFE)
  // =========================
  const normalizedValue = multiple
    ? Array.isArray(value)
      ? value
      : value
      ? [value]
      : []
    : value;

  const hasValue = multiple
    ? normalizedValue.length > 0
    : !!normalizedValue;

  const getFileNames = () => {
    if (!normalizedValue) return "";

    if (multiple) {
      return normalizedValue.map((f) => f?.name).filter(Boolean).join(", ");
    }

    return normalizedValue?.name || "";
  };

  return (
    <Box>
      <Typography variant="subtitle2" mb={1}>
        {label}
      </Typography>

      <Stack spacing={1}>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          style={{ display: "none" }}
          id={inputId}
        />

        <label htmlFor={inputId}>
          <Button variant="outlined" component="span">
            Choose File{multiple ? "s" : ""}
          </Button>
        </label>

        {/* ERROR */}
        {error && (
          <Typography color="error" fontSize={12}>
            {error}
          </Typography>
        )}

        {/* SELECTED FILES */}
        {hasValue && (
          <Typography fontSize={12}>
            Selected: {getFileNames()}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
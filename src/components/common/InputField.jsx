import { TextField, Box } from "@mui/material";

export default function InputField({
  label,
  type = "text",
  name,
  register,
  error,
  placeholder,
  disabled = false,
  fullWidth = true
}) {
  const registerProps = register ? register(name) : {};

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth={fullWidth}
        label={label}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={!!error}
        helperText={error?.message || ""}
        {...registerProps}
      />
    </Box>
  );
}
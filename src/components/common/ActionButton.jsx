import { Button } from "@mui/material";


export function ActionButton({ label, onClick, icon }) {
  return (
    <Button
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: "none",
      }}
    >
      {label}
    </Button>
  );
}

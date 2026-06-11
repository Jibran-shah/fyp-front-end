import { Button } from "@mui/material";

export default function NavButton({ label, onClick }) {
  return (
    <Button
      color="inherit"
      onClick={onClick}
      sx={{
        fontWeight: 500,
        textTransform: "none",
        opacity: 0.9,
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      {label}
    </Button>
  );
}
import { Card } from "@mui/material";

export default function MarketplaceCardShell({ children, sx, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",

        borderRadius: 2,
        overflow: "hidden",

        transition: "all 0.2s ease",

        border: `1px solid ${theme.palette.divider}`,

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: theme.shadows[3],
        },

        ...sx,
      })}
    >
      {children}
    </Card>
  );
}
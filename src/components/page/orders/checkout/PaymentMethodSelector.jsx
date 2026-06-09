import { Stack, Button } from "@mui/material";

export default function PaymentMethodSelector({
  value,
  onChange
}) {
  return (
    <Stack direction="row" spacing={1}>
      {["cod", "card", "wallet", "bank"].map((method) => (
        <Button
          key={method}
          variant={value === method ? "contained" : "outlined"}
          onClick={() => onChange(method)}
        >
          {method.toUpperCase()}
        </Button>
      ))}
    </Stack>
  );
}
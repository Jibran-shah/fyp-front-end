import {
  Paper,
  Typography,
  Stack,
  Button
} from "@mui/material";

export default function CartItemCard({ item }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Typography fontWeight={600}>
            {item.name || "Product"}
          </Typography>

          <Typography variant="body2">
            Price: Rs. {item.price}
          </Typography>

          <Typography variant="body2">
            Qty: {item.quantity}
          </Typography>

          <Typography variant="body2">
            Total: Rs. {item.total}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button size="small">
            +
          </Button>

          <Button size="small">
            -
          </Button>

          <Button
            size="small"
            color="error"
          >
            Remove
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
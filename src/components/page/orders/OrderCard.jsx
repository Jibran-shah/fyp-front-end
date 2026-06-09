import { Paper, Typography, Stack, Divider } from "@mui/material";

export default function OrderCard({ order, onClick }) {
  return (
    <Paper
      onClick={onClick}
      sx={{
        p: 2,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 1
      }}
    >
      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between">
        <Typography fontWeight={600}>
          Order #{order._id.slice(-6)}
        </Typography>

        <Typography variant="body2">
          {order.status}
        </Typography>
      </Stack>

      <Divider />

      {/* ITEMS PREVIEW */}
      <Stack spacing={1}>
        {order.items?.slice(0, 2).map((item, idx) => (
          <Stack key={idx}>
            <Typography fontWeight={500}>
              {item.product?.name || "Product"}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Seller: {item.seller?.shopName || "Seller"}
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">
                Qty: {item.quantity}
              </Typography>

              <Typography variant="body2">
                ${item.price} × {item.quantity} ={" "}
                ${item.price * item.quantity}
              </Typography>
            </Stack>
          </Stack>
        ))}

        {/* SHOW MORE INDICATOR */}
        {order.items?.length > 2 && (
          <Typography variant="body2" color="text.secondary">
            + {order.items.length - 2} more items
          </Typography>
        )}
      </Stack>

      <Divider />

      {/* FOOTER */}
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">
          Total Items: {order.items?.length || 0}
        </Typography>

        <Typography fontWeight={600}>
          Total: ${order.totalAmount}
        </Typography>
      </Stack>
    </Paper>
  );
}
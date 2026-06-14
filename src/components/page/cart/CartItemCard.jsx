import { useEffect, useState } from "react";

import {
  Paper,
  Typography,
  Stack,
  IconButton,
  Box,
  Divider,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutline from "@mui/icons-material/DeleteOutlined";

import {
  useRemoveCartItem,
  useUpdateCartItem,
} from "../../../hooks/api/cart/cart.hooks";

export default function CartItemCard({ item }) {
  const { mutate: removeItem, isPending: isRemoving } =
    useRemoveCartItem();

  const { mutate: updateItem, isPending: isUpdating } =
    useUpdateCartItem();

  const [quantity, setQuantity] = useState(item.quantity);

  // Has the user changed the quantity locally?
  const isDirty = quantity !== item.quantity;

  // Sync from server only when there are no unsaved edits
  useEffect(() => {
    if (!isDirty) {
      setQuantity(item.quantity);
    }
  }, [item.quantity, isDirty]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleUpdate = () => {
    updateItem({
      productId: item.product,
      quantity,
    });
  };

  const handleDelete = () => {
    removeItem(item.product);
  };

  const total = item.price * quantity;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        transition: "0.2s",
        opacity: isRemoving ? 0.5 : 1,
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {/* LEFT INFO */}
        <Stack spacing={0.5} sx={{ flex: 1 }}>
          <Typography fontWeight={700} fontSize="1rem">
            {item.name || "Product"}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Price: Rs. {item.price}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Qty: {quantity}
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography fontWeight={700} color="primary">
            Total: Rs. {total}
          </Typography>
        </Stack>

        {/* RIGHT CONTROLS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Quantity Controls */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <IconButton
              size="small"
              color="primary"
              onClick={handleDecrease}
              disabled={
                isUpdating ||
                isRemoving ||
                quantity <= 1
              }
            >
              <RemoveIcon fontSize="small" />
            </IconButton>

            <Typography fontWeight={600}>
              {quantity}
            </Typography>

            <IconButton
              size="small"
              color="primary"
              onClick={handleIncrease}
              disabled={isUpdating || isRemoving}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Stack>

          {/* Show Update only when changed */}
          {isDirty && (
            <Button
              size="small"
              variant="contained"
              onClick={handleUpdate}
              disabled={isUpdating || isRemoving}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          )}

          {/* Delete */}
          <IconButton
            size="small"
            color="error"
            onClick={handleDelete}
            disabled={isRemoving || isUpdating}
          >
            <DeleteOutline fontSize="small" />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
}
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Chip,
  CircularProgress
} from "@mui/material";

import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/api/products/products.hooks";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductById(id);

  if (isLoading) {
    return (
      <Box sx={{ p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">
          Failed to load product
        </Typography>
      </Box>
    );
  }

  const product = data; // adjust if your API wraps differently

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={2}>

          {/* NAME */}
          <Typography variant="h4">
            {product.name}
          </Typography>

          {/* STATUS */}
          <Chip
            label={product.status}
            color={product.status === "AVAILABLE" ? "success" : "default"}
          />

          {/* CATEGORY */}
          <Typography variant="body2" color="text.secondary">
            {product.categoryPath}
          </Typography>

          {/* DESCRIPTION */}
          <Typography>
            {product.description || "No description provided"}
          </Typography>

          {/* PRICE */}
          <Typography variant="h6">
            Price: Rs. {product.price}
          </Typography>

          {/* STOCK */}
          <Typography>
            Stock: {product.quantityAvailable}
          </Typography>

          {/* RATING */}
          <Typography>
            Rating: {product.ratingAverage?.toFixed(1) || "0"}
          </Typography>

          {/* SOLD */}
          <Typography>
            Sold: {product.soldCount}
          </Typography>

          {/* LOCATION */}
          {product.location?.fullAddress && (
            <Typography variant="body2">
              Location: {product.location.fullAddress}
            </Typography>
          )}

          {/* ACTIONS */}
          <Stack direction="row" spacing={2}>
            <Button variant="contained">
              Buy Now
            </Button>

            <Button variant="outlined">
              Add to Cart
            </Button>

            <Button variant="outlined">
              Edit
            </Button>
          </Stack>

        </Stack>
      </Paper>
    </Box>
  );
}
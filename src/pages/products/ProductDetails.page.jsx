import { Box, Paper, Typography, Button, Stack, Chip } from "@mui/material";

export default function ProductDetailsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h4">
            Product Name
          </Typography>

          <Chip label="Available" color="success" />

          <Typography>Category Path</Typography>
          <Typography>Description of product...</Typography>
          <Typography>Price: Rs. 1000</Typography>
          <Typography>Stock: 10</Typography>
          <Typography>Rating: 4.5</Typography>
          <Typography>Sold: 5</Typography>
          <Typography>Address</Typography>

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
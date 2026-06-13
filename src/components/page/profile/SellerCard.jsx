import { Card, CardContent, Typography, Stack, Button } from "@mui/material";

export default function SellerCard({
  productSeller,
  isOwnProfile,
  onEdit,
  onDelete,
  onCreate,
}) {
  // ================= NO SELLER PROFILE =================
  if (!productSeller) {
    return isOwnProfile ? (
      <Card sx={{ borderRadius: 3, p: 1 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700}>
            Seller Profile
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            You haven't created a seller profile yet.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={onCreate}
          >
            Become a Seller
          </Button>
        </CardContent>
      </Card>
    ) : null;
  }

  // ================= EXISTING SELLER =================
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700}>
          Shop
        </Typography>

        <Typography>{productSeller.shopName}</Typography>

        <Typography color="text.secondary">
          {productSeller.shopDescription}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          ⭐ {productSeller.ratingAverage ?? 0}
        </Typography>

        <Typography variant="caption">
          Products: {productSeller.totalProducts ?? 0}
        </Typography>

        {isOwnProfile && (
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={onEdit}>
              Edit
            </Button>

            <Button color="error" variant="outlined" onClick={onDelete}>
              Delete
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
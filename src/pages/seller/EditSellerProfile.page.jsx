import { Box } from "@mui/material";

import SellerProfileForm from "../../components/page/seller/SellerProfileForm";

export default function EditSellerProfilePage() {
  return (
    <Box sx={{ p: 4 }}>
      <SellerProfileForm
        submitText="Update Seller Profile"
      />
    </Box>
  );
}
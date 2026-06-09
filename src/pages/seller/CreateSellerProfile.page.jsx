import { Box } from "@mui/material";

import SellerProfileForm from "../../components/page/seller/SellerProfileForm";

export default function CreateSellerProfilePage() {
  return (
    <Box sx={{ p: 4 }}>
      <SellerProfileForm
        submitText="Create Seller Profile"
      />
    </Box>
  );
}
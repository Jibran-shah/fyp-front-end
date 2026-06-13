import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SellerProfileForm from "../../components/page/seller/SellerProfileForm";

import { useCreateProductSeller } from "../../hooks/api/productSeller/productSeller.hooks";
import { useCreateProductSellerForm } from "../../hooks/form/productSeller/useCreateProductSeller.form";

import { sellerProfileSchema } from "../../schemas/sellerProfile.schema";
import { useGeoLocation } from "../../hooks/ui/useGeoLocation";
import { buildProductSellerFormData } from "../../utils/form/sellerProfileFormData";

export default function CreateSellerProfilePage() {
  console.log("sellerProfile create mounted");

  const navigate = useNavigate();

  const form = useCreateProductSellerForm(
    sellerProfileSchema
  );

  const createMutation = useCreateProductSeller();

  const {
    status: locationStatus,
    error: locationError
  } = useGeoLocation(form.setValue);

  const onSubmit = (values) => {
    console.log("createSeller onSubmit",values)
    if (createMutation.isPending) return;
    const payload = buildProductSellerFormData(values, {
      shopLogoFile: values.shopLogoFile
    });
    console.log(payload);

    createMutation.mutate(payload, {
      onSuccess: (res) => {
        console.log(
          "[CreateSellerProfilePage] SUCCESS =>",
          res
        );

        navigate("/profile");
      }
    });
  };

  return (
    <Box sx={{ p: 4 }}>
      <SellerProfileForm
        form={form}
        onSubmit={onSubmit}
        isLoading={createMutation.isPending}
        submitText="Create Seller Profile"
        locationStatus={locationStatus}
        locationError={locationError}
      />
    </Box>
  );
}
import { Box } from "@mui/material";
import ProductForm from "../../components/products/ProductForm";

export default function ProductFormPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later API logic
  };

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <ProductForm mode="create" onSubmit={handleSubmit} />
    </Box>
  );
}
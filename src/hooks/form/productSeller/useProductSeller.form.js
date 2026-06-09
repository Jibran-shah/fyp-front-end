import { useForm } from "react-hook-form";

export const useProductSellerForm = (defaultValues = {}) => {
  return useForm({
    defaultValues: {
      shopName: "",
      shopDescription: "",
      locationLat: null,
      locationLn: null,
      shopLogoFile: null,
      ...defaultValues
    }
  });
};
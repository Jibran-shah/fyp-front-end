import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreateProductSellerForm = (schema) => {
  return useForm({
    resolver: zodResolver(schema),

    defaultValues: {
      shopName: "",
      shopDescription: "",
      locationLat: null,
      locationLn: null,
      shopLogoFile: null
    }
  });
};
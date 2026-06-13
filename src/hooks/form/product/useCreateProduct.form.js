import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreateProductForm = (schema) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      quantityAvailable: 0,
      category: "",
      images: []
    }
  });

  return {
    ...form
  };
};
import { useForm } from "react-hook-form";

export const useBuyerProfileForm = (defaultValues = {}) => {
  return useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      bio: "",
      country: "",
      city: "",
      address: "",
      profileAvatar: null,
      profileCover: null,
      ...defaultValues,
    },
  });
};
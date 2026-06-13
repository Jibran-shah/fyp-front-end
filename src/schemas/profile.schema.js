import { z } from "zod";

export const createProfileSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(80, "Maximum 80 characters"),

  phone: z.string().optional(),

  bio: z
    .string()
    .max(500, "Maximum 500 characters")
    .optional(),

  country: z.string().optional(),

  city: z.string().optional(),

  address: z.string().optional(),

  profileAvatar: z.any().optional(),

  profileCover: z.any().optional(),
});

export const updateProfileSchema =
  createProfileSchema.partial();
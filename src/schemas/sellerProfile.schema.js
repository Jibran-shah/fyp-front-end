import { z } from "zod";

export const sellerProfileSchema = z.object({
  shopName: z
    .string()
    .trim()
    .min(2, "Shop name must be at least 2 characters"),

  shopDescription: z
    .string()
    .trim()
    .max(1000, "Description is too long")
    .optional()
    .or(z.literal("")),

  fullAddress: z
    .string()
    .trim()
    .min(5, "Address is required"),

latitude: z
  .union([
    z.number(),
    z.string().transform((v) => Number(v))
  ])
  .optional(),

longitude: z
  .union([
    z.number(),
    z.string().transform((v) => Number(v))
  ])
  .optional(),

  shopLogoFile: z
    .any()
    .optional()
    .nullable()
});
import { z } from "zod";

// -------------------------
// FILE VALIDATION SCHEMA
// -------------------------
const fileSchema = z
  .union([z.array(z.instanceof(File)), z.instanceof(FileList)])
  .transform((val) => Array.from(val))
  .refine((files) => files.length >= 1, {
    message: "At least 1 file is required",
  })
  .refine((files) => files.length <= 10, {
    message: "Maximum 10 files allowed",
  });
// -------------------------
// PRODUCT SCHEMA
// -------------------------
export const productSchema = z.object({
  name: z.string().min(2).max(100),

  description: z.string().min(5).max(1000),

  price: z.coerce.number().min(0),

  quantityAvailable: z.coerce.number().min(0),

  category: z.string().min(1, "Category is required"),

  images: fileSchema,

  fullAddress: z.string().min(5).max(200)
});
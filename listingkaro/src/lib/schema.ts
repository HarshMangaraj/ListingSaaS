import { z } from "zod";

// Gemini (later) and the UI both use this shape, so the listing stays consistent.
export const listingSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1),
  keywords: z.array(z.string().min(1)).length(10),
  bullets: z.array(z.string().min(1)).length(5),
  suggestedCategory: z.string().min(1),
});

export type Listing = z.infer<typeof listingSchema>;

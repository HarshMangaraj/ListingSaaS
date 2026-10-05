import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Private seller screens should not show up in Google.
      disallow: ["/app", "/login"],
    },
  };
}

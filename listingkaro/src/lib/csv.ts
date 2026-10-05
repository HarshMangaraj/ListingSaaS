import type { Listing } from "@/lib/schema";

// RFC 4180: wrap the cell and double any quotes inside it.
function csvCell(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export function listingToCsv(listing: Listing): string {
  const header = ["title", "description", "keywords", "bullets", "suggestedCategory"]
    .map(csvCell)
    .join(",");

  const row = [
    listing.title,
    listing.description,
    listing.keywords.join("; "),
    listing.bullets.join("; "),
    listing.suggestedCategory,
  ]
    .map(csvCell)
    .join(",");

  return `${header}\n${row}\n`;
}

export function downloadListingCsv(listing: Listing, filename = "listingkaro-listing.csv") {
  const csv = listingToCsv(listing);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

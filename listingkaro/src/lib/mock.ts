import { listingSchema, type Listing } from "@/lib/schema";

export const SAMPLE_LISTING: Listing = listingSchema.parse({
  title: "Women Pink Floral Cotton Kurti — Knee Length Casual Wear",
  description:
    "Pink floral print kurti as seen in the photo. Appears to be a knee-length, round-neck style with three-quarter sleeves. Fabric looks like cotton; please [confirm: fabric] before listing. Suitable for daily wear. Exact size, lining, and care instructions not visible — [confirm: size chart]. Colour may vary slightly by screen.",
  keywords: [
    "pink kurti",
    "floral kurti",
    "cotton kurti women",
    "knee length kurti",
    "casual kurti",
    "daily wear kurti",
    "round neck kurti",
    "three quarter sleeve kurti",
    "printed kurti",
    "ethnic wear women",
  ],
  bullets: [
    "Pink floral print kurti as shown in the product photo",
    "Looks knee-length with round neck and three-quarter sleeves",
    "Fabric appears cotton — [confirm: fabric]",
    "Made for daily / casual ethnic wear",
    "Size and wash care not visible — [confirm: size chart]",
  ],
  suggestedCategory: "Women Ethnic Wear > Kurtis",
});

export type HistoryItem = {
  id: string;
  createdAt: string;
  photoName: string;
  listing: Listing;
};

export const SAMPLE_HISTORY: HistoryItem[] = [
  {
    id: "hist-1",
    createdAt: "2 hours ago",
    photoName: "kurti-pink.jpg",
    listing: SAMPLE_LISTING,
  },
  {
    id: "hist-2",
    createdAt: "Yesterday",
    photoName: "kids-tshirt.jpg",
    listing: listingSchema.parse({
      title: "Boys Navy Graphic T-Shirt — Short Sleeve Cotton Look",
      description:
        "Navy blue T-shirt with a light graphic print on the chest, as seen in the photo. Short sleeves and a regular crew neck. Fabric looks like cotton jersey; [confirm: fabric]. Age/size label is not readable in the photo — [confirm: size].",
      keywords: [
        "boys tshirt",
        "navy tshirt kids",
        "graphic tee boys",
        "cotton tshirt kids",
        "short sleeve tshirt",
        "crew neck tshirt",
        "kids casual wear",
        "boys summer tshirt",
        "printed tshirt boys",
        "daily wear kids",
      ],
      bullets: [
        "Navy T-shirt with chest graphic as shown",
        "Short sleeves and crew neck",
        "Fabric looks like cotton — [confirm: fabric]",
        "Kids casual / daily wear",
        "Size label not readable — [confirm: size]",
      ],
      suggestedCategory: "Kids Wear > Boys T-Shirts",
    }),
  },
];

export const CREDIT_PACKS = [
  {
    id: "pack-20",
    priceLabel: "Rs 99",
    listings: 20,
    blurb: "About Rs 5 per listing. Good for trying the workflow.",
    popular: false,
  },
  {
    id: "pack-100",
    priceLabel: "Rs 299",
    listings: 100,
    blurb: "About Rs 3 per listing. Best value if you list often.",
    popular: true,
  },
] as const;

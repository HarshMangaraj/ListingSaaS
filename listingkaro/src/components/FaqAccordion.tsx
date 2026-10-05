"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "I am not confident in English. Will this still help?",
    a: "Yes. Upload a photo and optional notes in Hindi, Hinglish, or Odia. The listing you copy is in English.",
  },
  {
    q: "Which marketplaces is this for?",
    a: "Meesho, Amazon, and Flipkart. Copy the title, description, bullets, and keywords into their listing forms.",
  },
  {
    q: "Will it invent details about my product?",
    a: "No. We only state what is visible in the photo or what you wrote. If something is unclear, you get a placeholder like [confirm: fabric].",
  },
  {
    q: "How do credits work?",
    a: "You get 3 free listings on signup. Extra packs: Rs 99 for 20 listings, Rs 299 for 100. Payments will use Razorpay (disabled in this demo).",
  },
  {
    q: "Where does my image go?",
    a: "When you generate a listing, Google Gemini reads the image. Sign-in is with Google. Payments go through Razorpay. See the Privacy page for details.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/10 bg-[#f4f0e8]">
      {FAQS.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.q}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sm text-white"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-5 pb-5 text-sm leading-7 text-ink/60">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

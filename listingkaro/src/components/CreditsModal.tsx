"use client";

import { CREDIT_PACKS } from "@/lib/mock";

type CreditsModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CreditsModal({ open, onClose }: CreditsModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="credits-title"
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-3">
          <h2 id="credits-title" className="font-display text-2xl font-medium">
            Buy credits
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xl text-ink/40 hover:text-ink"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <p className="mt-2 text-sm leading-6 text-ink/60">
          Razorpay checkout comes in a later phase. You can preview packs now.
        </p>
        <ul className="mt-5 space-y-3">
          {CREDIT_PACKS.map((pack) => (
            <li key={pack.id} className="rounded-2xl border border-ink/10 p-4">
              <p className="font-semibold">
                {pack.priceLabel} · {pack.listings} listings
              </p>
              <p className="mt-1 text-sm text-ink/55">{pack.blurb}</p>
              <button
                type="button"
                disabled
                className="mt-3 w-full rounded-full bg-[#f4f0e8] px-4 py-2.5 text-sm font-medium text-ink/45"
              >
                Payments coming soon
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

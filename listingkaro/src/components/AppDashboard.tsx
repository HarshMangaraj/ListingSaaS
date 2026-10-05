"use client";

import { useState } from "react";
import { compressImage } from "@/lib/compressImage";
import { SAMPLE_HISTORY, SAMPLE_LISTING, type HistoryItem } from "@/lib/mock";
import { listingSchema, type Listing } from "@/lib/schema";
import { CreditsModal } from "@/components/CreditsModal";
import { DemoBanner } from "@/components/DemoBanner";
import { ErrorBanner, type ErrorVariant } from "@/components/ErrorBanner";
import { HistoryList } from "@/components/HistoryList";
import { Logo } from "@/components/Logo";
import { ResultsCard } from "@/components/ResultsCard";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];

function delay(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export function AppDashboard() {
  const [credits, setCredits] = useState(3);
  const [buyOpen, setBuyOpen] = useState(false);
  const [error, setError] = useState<ErrorVariant | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState<Listing | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>(SAMPLE_HISTORY);
  const [activeId, setActiveId] = useState<string | null>(null);

  function resetPreview() {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFile(null);
  }

  async function onPickFile(next: File | undefined) {
    setError(null);

    if (!next) return;

    if (!ALLOWED.includes(next.type)) {
      setError("bad_image");
      return;
    }

    if (next.size > MAX_BYTES) {
      setError("bad_image");
      return;
    }

    try {
      const compressed = await compressImage(next);
      const jpegFile = new File([compressed], next.name.replace(/\.[^.]+$/, ".jpg"), {
        type: "image/jpeg",
      });
      if (preview) URL.revokeObjectURL(preview);
      setFile(jpegFile);
      setPreview(URL.createObjectURL(compressed));
    } catch {
      setError("bad_image");
    }
  }

  async function onGenerate() {
    setError(null);

    if (credits <= 0) {
      setError("no_credits");
      return;
    }

    if (!file) {
      setError("bad_image");
      return;
    }

    setLoading(true);
    await delay(2000);

    const sample = listingSchema.parse({
      ...SAMPLE_LISTING,
      description: notes.trim()
        ? `${SAMPLE_LISTING.description}\n\nSeller notes (demo): ${notes.trim()}`
        : SAMPLE_LISTING.description,
    });

    const item: HistoryItem = {
      id: `hist-${Date.now()}`,
      createdAt: "Just now",
      photoName: file.name,
      listing: sample,
    };

    setListing(sample);
    setHistory((prev) => [item, ...prev]);
    setActiveId(item.id);
    setCredits((n) => n - 1);
    setLoading(false);
  }

  return (
    <div className="flex min-h-full flex-col bg-background">
      <DemoBanner />
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Logo />
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#f4f0e8] px-3 py-1.5 text-sm font-medium">
              {credits} credits
            </span>
            <button
              type="button"
              onClick={() => setBuyOpen(true)}
              className="rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-white hover:bg-[#163044]"
            >
              Buy credits
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row">
        <div className="min-w-0 flex-1 space-y-4">
          {error ? <ErrorBanner variant={error} onClose={() => setError(null)} /> : null}

          <section className="rounded-3xl border border-ink/10 bg-white p-5 shadow-[0_12px_40px_rgba(11,28,40,0.06)] sm:p-6">
            <h1 className="font-display text-2xl font-medium">Create a listing</h1>
            <p className="mt-1 text-sm text-ink/55">
              JPG, PNG, or WEBP. Max 5 MB. We compress the photo to 1000px on the long side.
            </p>

            <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink/15 bg-[#f4f0e8] px-4 py-10 text-center transition hover:border-ink/30">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-accent">
                +
              </span>
              <span className="mt-3 font-semibold">Choose a product photo</span>
              <span className="mt-1 text-sm text-ink/45">Tap here or drop a file</span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="sr-only"
                onChange={(event) => onPickFile(event.target.files?.[0])}
              />
            </label>

            {preview ? (
              <div className="mt-4 overflow-hidden rounded-2xl bg-[#f4f0e8]">
                {/* Preview of the compressed JPEG the seller is about to send */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Product preview"
                  className="max-h-72 w-full object-contain"
                />
                <button
                  type="button"
                  onClick={resetPreview}
                  className="w-full py-2 text-sm text-ink/55 hover:text-ink"
                >
                  Remove photo
                </button>
              </div>
            ) : null}

            <label className="mt-5 block text-sm font-medium">
              Extra notes (optional) — Hindi, Hinglish, or Odia
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={4}
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-[#f4f0e8] px-3 py-2.5 text-base outline-none focus:border-ink/30"
                placeholder="Example: cotton, sizes M–XXL, ships from home"
              />
            </label>

            <button
              type="button"
              onClick={onGenerate}
              disabled={loading}
              className="mt-5 w-full rounded-full bg-ink px-4 py-3.5 font-semibold text-white hover:bg-[#163044] disabled:opacity-60"
            >
              {loading ? "Writing your listing…" : "Generate listing"}
            </button>
          </section>

          {listing ? <ResultsCard listing={listing} /> : null}
        </div>

        <aside className="w-full shrink-0 lg:w-80">
          <HistoryList
            items={history}
            activeId={activeId}
            onSelect={(item) => {
              setActiveId(item.id);
              setListing(item.listing);
            }}
          />
        </aside>
      </main>

      <CreditsModal open={buyOpen} onClose={() => setBuyOpen(false)} />
    </div>
  );
}

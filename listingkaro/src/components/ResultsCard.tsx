"use client";

import { useState, type ReactNode } from "react";
import type { Listing } from "@/lib/schema";
import { downloadListingCsv } from "@/lib/csv";

type ResultsCardProps = {
  listing: Listing;
};

async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

export function ResultsCard({ listing }: ResultsCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(label: string, text: string) {
    await copyText(text);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1500);
  }

  const allText = [
    listing.title,
    "",
    listing.description,
    "",
    listing.keywords.join(", "),
    "",
    listing.bullets.map((b) => `• ${b}`).join("\n"),
    "",
    listing.suggestedCategory,
  ].join("\n");

  return (
    <section className="space-y-3 rounded-3xl border border-ink/10 bg-white p-5 shadow-[0_12px_40px_rgba(11,28,40,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-xl font-medium">Your listing</h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => copy("all", allText)}
            className="rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-white hover:bg-[#163044]"
          >
            {copied === "all" ? "Copied" : "Copy all"}
          </button>
          <button
            type="button"
            onClick={() => downloadListingCsv(listing)}
            className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm font-medium hover:bg-[#f4f0e8]"
          >
            Download CSV
          </button>
        </div>
      </div>

      <ResultBlock
        label="Title"
        extra={`${listing.title.length}/100`}
        copied={copied === "title"}
        onCopy={() => copy("title", listing.title)}
      >
        <p className="font-medium leading-snug">{listing.title}</p>
      </ResultBlock>

      <ResultBlock
        label="Description"
        copied={copied === "description"}
        onCopy={() => copy("description", listing.description)}
      >
        <p className="whitespace-pre-wrap leading-6 text-ink/75">{listing.description}</p>
      </ResultBlock>

      <ResultBlock
        label="Keywords"
        copied={copied === "keywords"}
        onCopy={() => copy("keywords", listing.keywords.join(", "))}
      >
        <ul className="flex flex-wrap gap-2">
          {listing.keywords.map((word) => (
            <li key={word} className="rounded-full bg-[#f4f0e8] px-3 py-1 text-sm text-ink">
              {word}
            </li>
          ))}
        </ul>
      </ResultBlock>

      <ResultBlock
        label="Bullets"
        copied={copied === "bullets"}
        onCopy={() => copy("bullets", listing.bullets.map((b) => `• ${b}`).join("\n"))}
      >
        <ul className="list-disc space-y-1.5 pl-5 text-ink/75">
          {listing.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </ResultBlock>

      <ResultBlock
        label="Suggested category"
        copied={copied === "category"}
        onCopy={() => copy("category", listing.suggestedCategory)}
      >
        <p>{listing.suggestedCategory}</p>
      </ResultBlock>
    </section>
  );
}

function ResultBlock({
  label,
  extra,
  copied,
  onCopy,
  children,
}: {
  label: string;
  extra?: string;
  copied: boolean;
  onCopy: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#f4f0e8]/80 p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold tracking-wide text-ink/45 uppercase">
          {label}
          {extra ? <span className="ml-2 font-medium normal-case">{extra}</span> : null}
        </p>
        <button
          type="button"
          onClick={onCopy}
          className="text-sm font-medium text-ink/70 hover:text-ink"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      {children}
    </div>
  );
}

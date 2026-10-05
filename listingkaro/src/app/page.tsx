import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PricingCards } from "@/components/PricingCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SAMPLE_LISTING } from "@/lib/mock";

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-col">
      <section className="relative isolate min-h-[690px] overflow-hidden bg-ink text-white sm:min-h-[650px] lg:min-h-[620px]">
        <Image
          src="/seller-saree.jpg"
          alt="A model wearing a purple and gold traditional saree"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[center_12%]"
        />
        <div className="absolute inset-0 -z-10 bg-ink/35" />
        <div className="relative z-10">
          <SiteHeader dark />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 md:min-h-[550px] md:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] md:gap-8 lg:gap-16 lg:px-12 lg:py-10">
            <div className="hero-copy max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                A preview for Indian marketplace sellers
              </p>
              <h1 className="font-display mt-5 max-w-xl text-5xl leading-[1.04] font-medium sm:text-6xl lg:text-7xl">
                Better listings begin with a photo.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Turn product details into clear English copy for Meesho, Amazon, and Flipkart.
                Add notes in Hindi, Hinglish, or Odia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/app"
                  className="rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-ink transition hover:bg-[#f4bd43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Try the demo
                </Link>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-white/35 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm text-white/65">
                Preview build · Sample listings only · No payment required
              </p>
            </div>

            <aside className="hero-output hidden w-full max-w-sm justify-self-start border-l-2 border-accent bg-ink/80 p-5 backdrop-blur-sm sm:p-6 md:block md:justify-self-end">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Example listing
                </p>
                <span className="text-xs text-white/50">01 / 03</span>
              </div>
              <p className="font-display mt-5 text-2xl leading-snug font-medium sm:text-3xl">
                Women&apos;s Purple &amp; Gold Traditional Saree
              </p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                A traditional saree with a purple body and ornate gold border, as shown in the
                product photo. Confirm fabric and measurements before listing.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["saree", "purple", "gold border", "ethnic wear"].map((word) => (
                  <span key={word} className="border border-white/20 px-2.5 py-1 text-xs text-white/80">
                    {word}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-white/15 pt-4 text-xs text-white/50">
                Product details stay honest. Unclear attributes are flagged to confirm.
              </p>
            </aside>
          </div>
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noreferrer"
            className="absolute right-4 bottom-3 text-[10px] text-white/55 hover:text-white sm:right-8"
          >
            Sample photo
          </a>
        </div>
      </section>

      <main>
        <section className="border-b border-ink/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-[1fr_2fr] sm:items-center sm:px-8 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
              Made for the places you sell
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-display text-xl font-semibold text-ink/75 sm:justify-end sm:text-2xl">
              <span>Meesho</span>
              <span className="font-sans text-base font-bold tracking-[0.04em]">amazon</span>
              <span className="font-sans text-lg font-extrabold tracking-tight text-[#2874f0]">flipkart</span>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b07808]">
                From photo to product page
              </p>
              <h2 className="font-display mt-3 max-w-lg text-4xl leading-tight font-medium sm:text-5xl">
                Less rewriting. More ready-to-list.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/65 md:justify-self-end">
              A simple workflow for sellers who know their products better than they know listing
              English.
            </p>
          </div>
          <ol className="mt-12 grid border-y border-ink/15 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Start with a photo",
                d: "Choose a clear JPG, PNG, or WEBP product image up to 5 MB.",
              },
              {
                n: "02",
                t: "Add what the photo can’t",
                d: "Note sizes, fabric, or details in Hindi, Hinglish, or Odia.",
              },
              {
                n: "03",
                t: "Shape your listing",
                d: "Review the title, description, keywords, bullets, and category.",
              },
            ].map((step) => (
              <li key={step.n} className="border-b border-ink/15 py-6 sm:border-r sm:border-b-0 sm:px-6 sm:py-8 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0">
                <p className="font-display text-3xl text-[#b07808]">{step.n}</p>
                <h3 className="mt-5 text-lg font-semibold">{step.t}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-ink/60">{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-[#e9e4d9] py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b07808]">
                Clear, not overclaimed
              </p>
              <h2 className="font-display mt-3 text-4xl leading-tight font-medium sm:text-5xl">
                Your product deserves more than “nice kurti pink.”
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-ink/65">
                Specific details help shoppers understand what you sell. Unclear details should be
                checked, not guessed.
              </p>
            </div>
            <div className="grid overflow-hidden border border-ink/15 bg-white sm:grid-cols-2">
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/45">Before</p>
                <p className="font-display mt-6 text-3xl text-ink/45">nice kurti pink</p>
                <p className="mt-5 text-sm leading-6 text-ink/55">Hard to scan. Missing useful product details.</p>
              </div>
              <div className="border-t border-ink/15 bg-ink p-6 text-white sm:border-t-0 sm:border-l sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">After · example</p>
                <p className="font-display mt-6 text-2xl leading-snug">{SAMPLE_LISTING.title}</p>
                <p className="mt-5 text-sm leading-6 text-white/65">
                  Photo-visible details first. Fabric and sizing flagged for confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b07808]">Straightforward pricing</p>
          <div className="mt-3 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end">
            <h2 className="font-display text-4xl font-medium sm:text-5xl">One listing, one credit.</h2>
            <p className="max-w-md text-sm leading-6 text-ink/60 md:justify-self-end">
              Try the preview first. No subscription plans; buy a pack only when you need more.
            </p>
          </div>
          <div className="mt-10">
            <PricingCards />
          </div>
        </section>

        <section id="faq" className="border-t border-ink/10 bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[0.7fr_1.3fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b07808]">Good to know</p>
              <h2 className="font-display mt-3 text-4xl font-medium sm:text-5xl">Questions</h2>
            </div>
            <div>
              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

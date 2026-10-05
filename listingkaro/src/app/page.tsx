import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PricingCards } from "@/components/PricingCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SAMPLE_LISTING } from "@/lib/mock";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="bg-ink text-white">
        <SiteHeader dark />
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
                Meesho · Amazon · Flipkart
              </p>
              <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.15] font-medium tracking-tight sm:text-5xl">
                {SITE_TAGLINE}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
                Writing English titles is slow. {SITE_NAME} reads your photo, understands notes in
                Hindi, Hinglish, or Odia, and gives you a listing you can paste — with no made-up
                claims.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/login"
                  className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-ink hover:bg-[#f0b42a]"
                >
                  Start free — 3 listings
                </Link>
                <a
                  href="#demo"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm text-white/45">No monthly plan. Pay only for credits you use.</p>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
                <p className="text-xs font-medium tracking-wide text-accent uppercase">Sample output</p>
                <p className="mt-3 text-lg font-medium leading-snug">{SAMPLE_LISTING.title}</p>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/65">
                  {SAMPLE_LISTING.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {SAMPLE_LISTING.keywords.slice(0, 5).map((word) => (
                    <span
                      key={word}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section id="demo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-medium text-ink/50">How it works</p>
          <h2 className="font-display mt-2 text-3xl font-medium tracking-tight">
            Three steps. Works on your phone.
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Upload a photo",
                d: "A clear product shot. JPG, PNG, or WEBP, up to 5 MB. We shrink it in the browser.",
              },
              {
                n: "02",
                t: "Add notes (optional)",
                d: "Size, fabric, or anything the photo does not show — in Hindi, Hinglish, or Odia.",
              },
              {
                n: "03",
                t: "Copy and paste",
                d: "Title, description, 10 keywords, 5 bullets, and a suggested category. CSV too.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_12px_40px_rgba(11,28,40,0.06)]"
              >
                <p className="text-sm font-semibold text-accent">{step.n}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium text-ink/50">Before / after</p>
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight">
              Weak titles do not get found
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-ink/10 bg-[#f4f0e8] p-6">
                <p className="text-xs font-semibold tracking-wide text-ink/40 uppercase">Typical seller title</p>
                <p className="mt-4 font-display text-2xl text-ink/50">nice kurti pink</p>
                <p className="mt-4 text-sm leading-6 text-ink/55">
                  Search barely matches this. Fabric, length, and who it is for are missing.
                </p>
              </div>
              <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-white shadow-lg">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase">ListingKaro title</p>
                <p className="mt-4 font-display text-2xl leading-snug">{SAMPLE_LISTING.title}</p>
                <p className="mt-4 text-sm leading-6 text-white/65">
                  Only what the photo shows or you told us. If fabric is unclear, you get
                  [confirm: fabric] — never a guess sold as fact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-medium text-ink/50">Pricing</p>
          <h2 className="font-display mt-2 text-3xl font-medium tracking-tight">One listing, one credit</h2>
          <p className="mt-3 max-w-xl text-ink/60">No subscriptions. Buy a pack when you need more.</p>
          <div className="mt-10">
            <PricingCards />
          </div>
        </section>

        <section className="border-t border-ink/10 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-medium tracking-tight">Questions</h2>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

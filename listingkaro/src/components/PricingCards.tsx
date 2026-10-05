import Link from "next/link";
import { CREDIT_PACKS } from "@/lib/mock";

export function PricingCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <article className="flex flex-col rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_12px_40px_rgba(11,28,40,0.05)]">
        <p className="text-sm font-medium text-ink/50">Free</p>
        <p className="font-display mt-3 text-4xl font-medium">Rs 0</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink/60">
          <strong className="text-ink">3 listings</strong> when you sign up. Try the full flow
          before you buy.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex justify-center rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium hover:bg-[#f4f0e8]"
        >
          Continue with Google
        </Link>
      </article>

      {CREDIT_PACKS.map((pack) => (
        <article
          key={pack.id}
          className={`flex flex-col rounded-3xl p-6 ${
            pack.popular
              ? "bg-ink text-white shadow-xl"
              : "border border-ink/10 bg-white shadow-[0_12px_40px_rgba(11,28,40,0.05)]"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className={`text-sm font-medium ${pack.popular ? "text-accent" : "text-ink/50"}`}>
              {pack.listings} listings
            </p>
            {pack.popular ? (
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-ink">
                Popular
              </span>
            ) : null}
          </div>
          <p className="font-display mt-3 text-4xl font-medium">{pack.priceLabel}</p>
          <p className={`mt-3 flex-1 text-sm leading-6 ${pack.popular ? "text-white/65" : "text-ink/60"}`}>
            {pack.blurb}
          </p>
          <Link
            href="/login"
            className={`mt-6 inline-flex justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${
              pack.popular
                ? "bg-accent text-ink hover:bg-[#f0b42a]"
                : "bg-ink text-white hover:bg-[#163044]"
            }`}
          >
            Log in to buy
          </Link>
        </article>
      ))}
    </div>
  );
}

import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo light />
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
            Honest English listings for Meesho, Amazon, and Flipkart sellers.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/refund" className="hover:text-white">
            Refunds
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/45 sm:px-6">
          © {new Date().getFullYear()} {SITE_NAME}. Built for Indian online sellers.
        </p>
      </div>
    </footer>
  );
}

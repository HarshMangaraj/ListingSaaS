import { Logo } from "@/components/Logo";
import Link from "next/link";

type SiteHeaderProps = {
  compact?: boolean;
  dark?: boolean;
};

export function SiteHeader({ compact = false, dark = false }: SiteHeaderProps) {
  return (
    <header
      className={
        dark
          ? "border-b border-white/10 bg-ink/80 backdrop-blur"
          : "sticky top-0 z-40 border-b border-ink/10 bg-[#f4f0e8]/85 backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
        <Logo light={dark} />
        {!compact ? (
          <nav aria-label="Main navigation" className="flex items-center gap-2 text-sm sm:gap-4">
            <a
              href="#how-it-works"
              className={dark ? "hidden text-white/70 hover:text-white lg:inline" : "hidden text-ink/60 hover:text-ink lg:inline"}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className={dark ? "hidden text-white/70 hover:text-white sm:inline" : "hidden text-ink/60 hover:text-ink sm:inline"}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className={dark ? "hidden text-white/70 hover:text-white lg:inline" : "hidden text-ink/60 hover:text-ink lg:inline"}
            >
              FAQ
            </a>
            <Link
              href="/login"
              className={dark ? "hidden text-white/80 hover:text-white sm:inline" : "hidden text-ink/70 hover:text-ink sm:inline"}
            >
              Sign in
            </Link>
            <Link
              href="/app"
              className="rounded-full bg-ink px-4 py-2 font-medium text-white shadow-sm hover:bg-[#163044]"
            >
              Try the demo
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

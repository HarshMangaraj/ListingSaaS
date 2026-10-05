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
          <nav className="flex items-center gap-2 text-sm sm:gap-4">
            <a
              href="#pricing"
              className={dark ? "hidden text-white/70 sm:inline hover:text-white" : "hidden text-ink/60 sm:inline hover:text-ink"}
            >
              Pricing
            </a>
            <Link
              href="/login"
              className={dark ? "text-white/80 hover:text-white" : "text-ink/70 hover:text-ink"}
            >
              Log in
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-ink px-4 py-2 font-medium text-white shadow-sm hover:bg-[#163044]"
            >
              Create a listing
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

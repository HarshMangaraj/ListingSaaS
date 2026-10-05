import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-sm font-semibold tracking-wide text-ink/40 uppercase">404</p>
        <h1 className="font-display mt-3 text-3xl font-medium tracking-tight">Page not found</h1>
        <p className="mt-3 text-ink/60">
          That link may be wrong, or the page has moved. Head back home to create a listing.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-[#163044]"
        >
          Go home
        </Link>
      </main>
    </div>
  );
}

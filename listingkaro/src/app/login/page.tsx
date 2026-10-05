import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col bg-ink">
      <SiteHeader compact dark />
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <p className="text-xs font-semibold tracking-wide text-ink/40 uppercase">Sellers</p>
          <h1 className="font-display mt-2 text-3xl font-medium">Log in</h1>
          <p className="mt-3 text-sm leading-6 text-ink/60">
            Sign in with Google. This demo skips real OAuth and opens the dashboard.
          </p>
          <Link
            href="/app"
            className="mt-8 flex items-center justify-center gap-3 rounded-full border border-ink/10 bg-[#f4f0e8] px-4 py-3 font-medium hover:bg-[#eee9df]"
          >
            <GoogleMark />
            Continue with Google
          </Link>
          <p className="mt-4 text-center text-sm text-ink/45">
            Privacy details are on the{" "}
            <Link href="/privacy" className="underline hover:text-ink">
              Privacy
            </Link>{" "}
            page.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.7-6.5 7.1l.1.1 6.2 5.2C36.9 41.5 44 36 44 24c0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}

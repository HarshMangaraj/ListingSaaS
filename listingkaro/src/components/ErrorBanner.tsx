export type ErrorVariant =
  | "rate_limit"
  | "bad_image"
  | "no_credits"
  | "payment_failed";

const MESSAGES: Record<ErrorVariant, { title: string; body: string }> = {
  rate_limit: {
    title: "Please wait a moment",
    body: "Too many requests right now. Try again in about a minute.",
  },
  bad_image: {
    title: "This photo cannot be used",
    body: "Use a JPG, PNG, or WEBP under 5 MB. Pick a clear product photo.",
  },
  no_credits: {
    title: "You are out of credits",
    body: "Please buy a pack. Rs 99 for 20 listings, or Rs 299 for 100.",
  },
  payment_failed: {
    title: "Payment did not go through",
    body: "You should not have been charged. Try again in a bit, or check Razorpay.",
  },
};

type ErrorBannerProps = {
  variant: ErrorVariant;
  onClose?: () => void;
};

export function ErrorBanner({ variant, onClose }: ErrorBannerProps) {
  const message = MESSAGES[variant];

  return (
    <div
      role="alert"
      className="flex items-start justify-between gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-950"
    >
      <div>
        <p className="font-semibold">{message.title}</p>
        <p className="mt-1 text-red-800/90">{message.body}</p>
      </div>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-lg leading-none text-red-700 hover:text-red-950"
          aria-label="Dismiss error"
        >
          ×
        </button>
      ) : null}
    </div>
  );
}

import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export default function ContactPage() {
  return (
    <LegalPage title="Contact">
      <p>Questions about {SITE_NAME}, a payment issue, or a privacy request? Email us.</p>
      <p>
        <a className="text-lg font-semibold text-ink underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </p>
      <p>
        For payment problems, include your Razorpay payment id, the Google account email, and
        what happened. We handle unused credits and payment errors as described in the refund
        policy.
      </p>
    </LegalPage>
  );
}

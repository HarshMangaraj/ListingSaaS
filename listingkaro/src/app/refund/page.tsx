import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export default function RefundPage() {
  return (
    <LegalPage title="Refund policy">
      <p>{SITE_NAME} credits are a digital product. Refunds apply in these cases:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Failed generation:</strong> if the listing is not created (AI error), that
          credit is returned.
        </li>
        <li>
          <strong>Payment error:</strong> you were charged but credits did not appear — email{" "}
          {CONTACT_EMAIL} with your Razorpay payment id.
        </li>
        <li>
          <strong>Unused credits:</strong> unused credits from a pack can be refunded if you ask
          within 7 days of purchase.
        </li>
      </ul>
      <p>
        Used credits (a successful generate) are not refunded. A marketplace rejecting your
        listing is not a reason for a refund — you control what you paste.
      </p>
      <p>
        Request:{" "}
        <a className="font-medium text-ink underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </p>
    </LegalPage>
  );
}

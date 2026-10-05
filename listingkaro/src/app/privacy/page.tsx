import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        {SITE_NAME} helps Indian online sellers write product listings. This page explains what
        data we collect and where it is sent.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Google sign-in</h2>
      <p>
        You sign in with Google. We store your Google name, email, and profile photo (if Google
        shares them) so we can keep your account and credits.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Product photos</h2>
      <p>
        When you generate a listing, Google Gemini processes the uploaded image. Photos are used
        to write the listing. We do not publish them to Meesho, Amazon, or Flipkart for you.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Payments</h2>
      <p>
        Credit packs are processed by Razorpay. We do not store card or UPI details. Payment IDs
        are kept so the same payment cannot add credits twice.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Contact</h2>
      <p>
        Questions:{" "}
        <a className="font-medium text-ink underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}

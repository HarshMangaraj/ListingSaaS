import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use">
      <p>
        {SITE_NAME} is an AI listing helper. You own your marketplace accounts. We do not publish
        listings on Meesho, Amazon, or Flipkart — you copy and paste.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Honest listings</h2>
      <p>
        Output is based only on what is visible in the photo and what you wrote in notes.
        Placeholders such as [confirm: fabric] are for you to check. False claims in the live
        listing are your responsibility.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Credits</h2>
      <p>
        Each successful generate uses 1 credit. You get 3 free listings on signup. Packs: Rs 99 =
        20 listings, Rs 299 = 100 listings.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Accounts</h2>
      <p>
        Google sign-in is required. We may close accounts used for scraping, abuse, or illegal
        products.
      </p>
      <p>
        Contact:{" "}
        <a className="font-medium text-ink underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </p>
    </LegalPage>
  );
}

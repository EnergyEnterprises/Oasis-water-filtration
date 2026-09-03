import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and request a quote",
  description:
    "Request a free water test and quote for whole-home treatment or point-source RO drinking water. Oasis Water Filtration, 517 E. 3rd St., Meridian, ID 83642. Call 208-573-0859.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a free water test and quote"
        lede="Call or use the form. The form on this preview site does not send email — the phone number does."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <QuoteForm />

        <aside className="space-y-6">
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-deep">Call or visit</h2>
            <p className="mt-4">
              <a className="text-2xl font-semibold text-teal" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              <a
                className="underline decoration-line underline-offset-4 hover:text-teal"
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {site.addressLine}
              </a>
            </p>
            <a
              className="btn btn-outline mt-6"
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {site.mapLabel}
            </a>
          </div>

          <div className="rounded-2xl bg-sand p-6 sm:p-8">
            <h2 className="font-display text-2xl text-deep">What to mention</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Well or city water, your city, and whether you notice stain,
              smell, hardness, or sediment — or want point-source RO for
              drinking water. That is enough to start a test and quote.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

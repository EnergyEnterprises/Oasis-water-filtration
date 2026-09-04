import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free water test",
  description:
    "Request a free water test and quote for whole-home treatment or point-source RO drinking water. Oasis Water Filtration, 517 E. 3rd St., Meridian, ID 83642. Call 208-573-0859.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free test"
        title="Request a free water test"
        lede={`Call ${site.phoneDisplay} to start a free water test and quote. You can also leave details in the form — a call is the surest way to reach us.`}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-6 lg:order-none">
          <div className="card phone-emphasis p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
              Fastest way to start
            </p>
            <h2 className="font-display mt-2 text-2xl text-deep">Call for a free water test</h2>
            <p className="mt-4">
              <a className="text-3xl font-semibold text-teal" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Mention stain, smell, hardness, sediment, or drinking-water RO —
              and whether you are on a private well. That is enough to start.
            </p>
            <a className="btn btn-primary mt-6" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-deep">Shop and office</h2>
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
          </div>
        </aside>

        <div>
          <h2 className="font-display text-2xl text-deep">Or leave your details</h2>
          <p className="mt-2 mb-6 max-w-xl leading-relaxed text-muted">
            The form is optional. If you use it, please also call so we have
            the request.
          </p>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

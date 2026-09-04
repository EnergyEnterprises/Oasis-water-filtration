import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process: test, quote, install, service",
  description:
    "How Oasis Water Filtration works: free water test, a quote for whole-home treatment and/or point-source RO, install, and service for Treasure Valley private wells.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Test, quote, install, then service"
        lede="A free water test comes first. The quote follows what is in the well. Install can be whole-home treatment, a point-source RO drinking-water system, or both. Service keeps the system working."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ol className="space-y-6">
          {processSteps.map((step) => (
            <li key={step.n} className="card p-6 sm:p-8">
              <p className="font-display text-sm text-clay">{step.n}</p>
              <h2 className="font-display mt-2 text-3xl text-deep">{step.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 leading-relaxed text-muted">
          Ready to start? Call{" "}
          <a className="font-semibold text-teal underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>{" "}
          or{" "}
          <Link className="font-semibold text-teal underline" href="/contact">
            request a free water test
          </Link>
          .
        </p>
      </section>

      <CtaBand title="Start with a free water test" />
    </>
  );
}

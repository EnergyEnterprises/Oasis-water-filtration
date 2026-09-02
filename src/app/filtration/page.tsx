import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { treatmentIcons } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { treatments } from "@/lib/site";

export const metadata: Metadata = {
  title: "Filtration and what we treat",
  description:
    "Whole-home water filtration and treatment for sediment, hardness and softening, iron, sulfur, taste and odor, and UV — a typical well-water package for Treasure Valley homes.",
  alternates: { canonical: "/filtration" },
};

export default function FiltrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Filtration"
        title="What we treat in well water"
        lede="Oasis Water Filtration is whole-home water filtration and treatment: sediment, hardness and softening, iron, sulfur, taste and odor, and UV as a typical well-water package. Free water tests and quotes."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6">
          {treatments.map((item) => {
            const Icon = treatmentIcons[item.slug];
            return (
              <article
                key={item.slug}
                id={item.slug}
                className="card grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:p-8"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-foam text-teal">
                  <Icon className="size-10" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-deep">{item.title}</h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 max-w-2xl">
          <h2 className="font-display text-2xl text-deep">A typical well-water package</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Most private wells need more than one stage. Sediment first, then
            the treatment that matches the test — softening, iron, sulfur, or
            taste and odor — with UV as a typical disinfection stage. The
            quote follows the water, not a single product.
          </p>
          <Link className="btn btn-primary mt-6" href="/contact">
            Request a free water test
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

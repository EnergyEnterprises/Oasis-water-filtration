import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service area",
  description:
    "Oasis Water Filtration serves Treasure Valley homes on private wells in Ada and Canyon County, Idaho. Shop address: 3937 East Ustick Road, Meridian.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title="Treasure Valley wells, Ada and Canyon County"
        lede="Whole-home filtration for homes on private wells across the Treasure Valley. Based in Meridian, Idaho."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-2xl text-deep">Where we work</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>Treasure Valley</li>
            <li>Ada County, Idaho</li>
            <li>Canyon County, Idaho</li>
            <li>Homes on private wells</li>
          </ul>
          <p className="mt-6 leading-relaxed text-muted">
            If you are on a well in this area and notice stain, smell,
            hardness, or sediment, request a free water test.
          </p>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-2xl text-deep">Meridian address</h2>
          <p className="mt-4 leading-relaxed">
            <a
              className="font-semibold text-teal underline underline-offset-4"
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {site.addressLine}
            </a>
          </p>
          <p className="mt-3">
            <a className="text-xl font-semibold text-deep" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </p>
          <a
            className="btn btn-primary mt-6"
            href={site.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open map
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

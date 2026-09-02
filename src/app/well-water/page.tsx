import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why well water treatment matters",
  description:
    "Private wells in the Treasure Valley are not treated at a city plant. Hardness, iron stains, sulfur smell, sediment, and taste are common reasons for whole-home filtration. Point-source RO is available for drinking water.",
  alternates: { canonical: "/well-water" },
};

const reasons = [
  {
    title: "No plant between the well and the house",
    body: "City water is treated before it is piped to the tap. Water from a private well reaches the pressure tank and then the house. If it needs filtration, that work happens at the home.",
  },
  {
    title: "Hardness shows up as scale",
    body: "Mineral hardness leaves spots on glass, film on fixtures, and scale in heaters and appliances. Softening is the usual whole-home answer when the test shows hardness.",
  },
  {
    title: "Iron stains and sulfur smell",
    body: "Orange rust in sinks and laundry, or a rotten-egg odor at the tap, are frequent well-water complaints. Both are treatable once the water is tested.",
  },
  {
    title: "Sediment and taste",
    body: "Cloudy water, grit in screens, or a metallic or off taste are reasons people treat the whole house. A point-source RO system can further polish drinking and cooking water at one faucet.",
  },
  {
    title: "UV as a typical well-water stage",
    body: "Because a private well is not disinfected at a municipal plant, UV is a typical part of a well-water package after sediment and other treatment are in place.",
  },
];

export default function WellWaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Well water"
        title="Why filtration matters on a private well"
        lede={`Homes on private wells in ${site.areaLong} do not receive city-treated water. Whole-home filtration is how sediment, hardness, iron, sulfur, and taste or odor are handled at every tap. Point-source RO polishes drinking water at a dedicated faucet.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5">
          {reasons.map((reason) => (
            <article key={reason.title} className="card p-6 sm:p-8">
              <h2 className="font-display text-2xl text-deep">{reason.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {reason.body}
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-10 max-w-2xl rounded-2xl bg-sand p-6 sm:p-8">
          <h2 className="font-display text-2xl text-deep">Related work, different offer</h2>
          <p className="mt-3 leading-relaxed text-muted">
            If the well pump, plumbing, electrical, or a backup generator is
            the need, that is {site.sister}, a division of {site.parent}. This
            site is for water filtration and treatment — whole-home systems
            and point-source RO for drinking water.
          </p>
        </aside>
      </section>

      <CtaBand />
    </>
  );
}

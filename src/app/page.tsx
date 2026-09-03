import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { treatmentIcons } from "@/components/Icons";
import { processSteps, site, treatments } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-water grain text-sand">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/70">
              {site.city}, {site.state} · {site.areaShort} wells
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl leading-[1.12] text-balance sm:text-5xl lg:text-6xl">
              Whole-home treatment, plus RO for drinking water.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/82 sm:text-lg">
              Oasis Water Filtration treats sediment, hardness, iron, sulfur,
              and taste or odor for {site.audience} in {site.areaLong}. We also
              offer point-source reverse osmosis for drinking and cooking water
              at a dedicated faucet. UV is a typical part of a well-water
              package. Free water test and quote.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-on-dark" href={site.phoneHref}>
                Call {site.phoneDisplay}
              </a>
              <Link className="btn btn-ghost" href="/contact">
                Request a quote
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sand/65">
              Local well water
            </p>
            <ul className="mt-4 space-y-3 text-sand/90">
              <li>Whole-home filtration and treatment</li>
              <li>Point-source RO for drinking water</li>
              <li>Free water tests and quotes</li>
              <li>Ada and Canyon County private wells</li>
              <li>
                <a
                  href={site.mapUrl}
                  className="underline decoration-sand/35 underline-offset-4 hover:decoration-sand"
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.addressLine}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-foam">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
            What we offer
          </p>
          <h2 className="font-display mt-2 text-3xl text-deep sm:text-4xl">
            Two kinds of treatment
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            <li className="card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
                Whole house
              </p>
              <h3 className="font-display mt-3 text-2xl text-deep">
                Filtration and treatment at every tap
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Sediment, hardness and softening, iron, sulfur, taste and odor,
                and UV as a typical well-water package — treated where well water
                enters the home.
              </p>
            </li>
            <li className="card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
                Point source
              </p>
              <h3 className="font-display mt-3 text-2xl text-deep">
                Reverse osmosis for drinking water
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                A point-of-use RO system polishes water at one tap for drinking
                and cooking, typically under the sink with a dedicated faucet. It
                works alongside whole-home treatment, not in place of it.
              </p>
              <Link
                className="mt-4 inline-block text-sm font-semibold text-teal underline underline-offset-4"
                href="/filtration#reverse-osmosis"
              >
                How drinking-water RO fits
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              What we treat
            </p>
            <h2 className="font-display mt-2 text-3xl text-deep sm:text-4xl">
              Filtration for the whole house
            </h2>
          </div>
          <Link className="text-sm font-semibold text-teal underline underline-offset-4" href="/filtration">
            See every treatment
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item) => {
            const Icon = treatmentIcons[item.slug];
            return (
              <li key={item.slug} className="card p-5">
                <Icon className="size-10 text-teal" />
                <h3 className="font-display mt-4 text-xl text-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-foam">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              Why it matters
            </p>
            <h2 className="font-display mt-2 text-3xl text-deep sm:text-4xl">
              Private wells are not city water.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              A municipal plant treats city water before it reaches the tap. A
              private well does not. Treasure Valley homes on wells often see
              hardness, iron staining, sulfur smell, sediment, or water that
              simply does not taste right. Whole-home treatment is how those
              issues are handled at every faucet.
            </p>
            <Link className="btn btn-primary mt-6" href="/well-water">
              Why well water needs treatment
            </Link>
          </div>
          <div className="card p-6 sm:p-8">
            <p className="font-display text-2xl text-deep">
              Built for Ada and Canyon County wells
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              This site is for filtration and treatment. Well pump, plumbing,
              electrical, and backup generators are related services through{" "}
              {site.sister}, a division of {site.parent} — not the primary
              offer here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
          How it works
        </p>
        <h2 className="font-display mt-2 text-3xl text-deep sm:text-4xl">
          Test, quote, install, service
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.n} className="card p-5">
              <p className="font-display text-sm text-clay">{step.n}</p>
              <h3 className="font-display mt-2 text-xl text-deep">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <Link className="btn btn-outline mt-8" href="/process">
          Read the process
        </Link>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              Service area
            </p>
            <h2 className="font-display mt-2 text-3xl text-deep">
              Treasure Valley homes on private wells
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Ada and Canyon County, Idaho. Shop and office: {site.addressLine}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href="/service-area">
                Service area
              </Link>
              <a
                className="btn btn-outline"
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Map the Ustick address
              </a>
            </div>
          </div>
          <p className="self-center text-lg leading-relaxed text-deep/80">
            If the well is in the Treasure Valley and the water stains, smells,
            feels hard, or runs cloudy, start with a free test.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

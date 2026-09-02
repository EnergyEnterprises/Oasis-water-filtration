import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-deep text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo invert />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/75">
            Whole-home water filtration and treatment for {site.areaLong},{" "}
            {site.audience}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-sand/60">
            Visit and call
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            <a
              href={site.mapUrl}
              className="underline decoration-sand/30 underline-offset-4 hover:decoration-sand"
              target="_blank"
              rel="noreferrer"
            >
              {site.addressLine}
            </a>
          </p>
          <p className="mt-2">
            <a className="text-lg font-semibold text-sand" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-sand/60">
            Pages
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-sand/65 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            {site.name}. Intended site for {site.domain}.
          </p>
          <p>
            Sister services — well pump, plumbing, electrical, and backup
            generators — are handled by {site.sister}, a division of{" "}
            {site.parent}.
          </p>
        </div>
      </div>
    </footer>
  );
}

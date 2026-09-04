import Link from "next/link";
import { cta, site } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-deep/10 bg-cream/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link className="btn btn-primary flex-1" href={cta.primaryHref}>
          {cta.primaryShort}
        </Link>
        <a className="btn btn-outline flex-1" href={site.phoneHref}>
          Call
        </a>
      </div>
    </div>
  );
}

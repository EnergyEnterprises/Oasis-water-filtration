import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
        Page not found
      </p>
      <h1 className="font-display mt-3 text-4xl text-deep">
        That page is not on this site.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Use the menu for filtration, well water, process, service area, or
        contact — or call {site.phoneDisplay}.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link className="btn btn-primary" href="/">
          Back to home
        </Link>
        <Link className="btn btn-outline" href="/contact">
          Request a quote
        </Link>
      </div>
    </div>
  );
}

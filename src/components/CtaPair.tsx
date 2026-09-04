import Link from "next/link";
import { cta, site } from "@/lib/site";

type CtaPairProps = {
  variant?: "default" | "on-dark";
  primaryLabel?: string;
  className?: string;
};

export function CtaPair({
  variant = "default",
  primaryLabel = cta.primary,
  className = "",
}: CtaPairProps) {
  const primaryClass = variant === "on-dark" ? "btn btn-on-dark" : "btn btn-primary";
  const secondaryClass = variant === "on-dark" ? "btn btn-ghost" : "btn btn-outline";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`.trim()}>
      <Link className={primaryClass} href={cta.primaryHref}>
        {primaryLabel}
      </Link>
      <a className={secondaryClass} href={site.phoneHref}>
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}

import Link from "next/link";

type LogoProps = {
  invert?: boolean;
};

export function Logo({ invert = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 no-underline ${invert ? "text-sand" : "text-deep"}`}
      aria-label="Oasis Water Filtration home"
    >
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-full ${
          invert ? "bg-sand/15 text-sand" : "bg-teal text-cream"
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="size-5" fill="none">
          <path
            d="M16 5c0 0-7 8.2-7 13.2A7 7 0 0 0 16 25a7 7 0 0 0 7-6.8C23 13.2 16 5 16 5Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M13.2 17.6c.4-2.4 1.5-4.3 2.8-6"
            stroke={invert ? "#0a2f36" : "#e8f3f1"}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="font-display block text-[1.15rem] font-semibold tracking-tight">
          Oasis
        </span>
        <span
          className={`block text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
            invert ? "text-sand/75" : "text-muted"
          }`}
        >
          Water Filtration
        </span>
      </span>
    </Link>
  );
}

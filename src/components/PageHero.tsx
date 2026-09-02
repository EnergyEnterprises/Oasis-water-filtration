type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede: string;
};

export function PageHero({ eyebrow, title, lede }: PageHeroProps) {
  return (
    <header className="hero-water grain text-sand">
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand/82 sm:text-lg">
          {lede}
        </p>
      </div>
    </header>
  );
}

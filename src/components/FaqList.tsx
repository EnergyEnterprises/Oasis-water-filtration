import { faqs } from "@/lib/site";

type FaqListProps = {
  heading?: string;
  eyebrow?: string;
};

export function FaqList({
  eyebrow = "Questions",
  heading = "Common questions",
}: FaqListProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
        {eyebrow}
      </p>
      <h2 className="font-display mt-2 text-3xl text-deep sm:text-4xl">{heading}</h2>
      <div className="mt-8 space-y-3">
        {faqs.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

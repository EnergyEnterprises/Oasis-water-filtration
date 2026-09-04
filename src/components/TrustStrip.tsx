import { trustItems } from "@/lib/site";

export function TrustStrip() {
  return (
    <section aria-label="What you can count on" className="trust-strip">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
        <ul className="trust-strip-list">
          {trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

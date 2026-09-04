import { CtaPair } from "@/components/CtaPair";

type CtaBandProps = {
  title?: string;
  body?: string;
};

export function CtaBand({
  title = "Request a free water test",
  body = "Tell us what you notice at the tap. We will test the well and quote whole-home treatment, point-source RO for drinking water, or both.",
}: CtaBandProps) {
  return (
    <section className="bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl text-deep sm:text-4xl">{title}</h2>
          <p className="mt-3 text-muted">{body}</p>
        </div>
        <CtaPair />
      </div>
    </section>
  );
}

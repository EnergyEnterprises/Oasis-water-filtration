import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: "+12085730859",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.stateAbbr,
      postalCode: site.postalCode,
      addressCountry: "US",
    },
    areaServed: ["Treasure Valley", "Ada County", "Canyon County", "Meridian"],
    description:
      "Whole-home water filtration and treatment, plus point-source reverse osmosis for drinking water, for homes on private wells in Ada and Canyon County, Idaho.",
    parentOrganization: {
      "@type": "Organization",
      name: site.parent,
    },
    brand: {
      "@type": "Brand",
      name: site.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

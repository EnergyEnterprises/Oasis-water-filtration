export const site = {
  name: "Oasis Water Filtration",
  shortName: "Oasis",
  domain: "oasiswaterfiltration.com",
  url: "https://oasiswaterfiltration.com",
  phoneDisplay: "208-573-0859",
  phoneHref: "tel:+12085730859",
  addressLine: "517 E. 3rd St., Meridian, ID 83642",
  street: "517 E. 3rd St.",
  city: "Meridian",
  state: "Idaho",
  stateAbbr: "ID",
  postalCode: "83642",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=517+E.+3rd+St.,+Meridian,+ID+83642",
  mapLabel: "Map 517 E. 3rd St.",
  sister: "Oasis Well Pump",
  parent: "Energy Enterprises LLC",
  areaShort: "Treasure Valley",
  areaLong: "Treasure Valley / Ada and Canyon County, Idaho",
  audience: "homes on private wells",
} as const;

export const nav = [
  { href: "/filtration", label: "What we treat" },
  { href: "/well-water", label: "Why wells" },
  { href: "/process", label: "How it works" },
  { href: "/service-area", label: "Service area" },
  { href: "/contact", label: "Free test" },
] as const;

export const cta = {
  primary: "Request a free water test",
  primaryShort: "Free water test",
  primaryHref: "/contact",
} as const;

export const roOffer = {
  slug: "reverse-osmosis",
  title: "Point-source reverse osmosis",
  summary:
    "A point-of-use reverse osmosis system for drinking and cooking water, typically under the sink with a dedicated faucet.",
  detail:
    "Point-source RO is a point-of-use system: it polishes water at one tap for drinking and cooking, usually installed under the sink with a dedicated drinking-water faucet. It sits alongside whole-home treatment for the rest of the house. It does not replace whole-home sediment, softening, iron, sulfur, or UV.",
} as const;

export const treatments = [
  {
    slug: "sediment",
    title: "Sediment",
    notice: "sediment",
    summary:
      "Sand, grit, and rust particles that cloud water, wear fixtures, and clog screens.",
    detail:
      "Well water can carry sediment from the aquifer, casing, or plumbing. A whole-home sediment stage is usually the first line of treatment so later equipment and every tap stay clearer.",
  },
  {
    slug: "hardness",
    title: "Hardness / softening",
    notice: "hardness",
    summary:
      "Mineral hardness that leaves scale on fixtures, spots on glass, and stiff laundry.",
    detail:
      "Hard water is a common well-water complaint. Softening is sized to the home so showers, appliances, and plumbing see less scale and soap works the way it should.",
  },
  {
    slug: "iron",
    title: "Iron",
    notice: "stain",
    summary:
      "Orange or rust stains in sinks, tubs, toilets, and laundry.",
    detail:
      "Dissolved or particulate iron shows up as staining and metallic taste. Treatment depends on the form of iron in the sample, which is why a water test comes first.",
  },
  {
    slug: "sulfur",
    title: "Sulfur",
    notice: "smell",
    summary:
      "Rotten-egg odor that shows up at the tap or when hot water runs.",
    detail:
      "Sulfur smell is a frequent well-water issue. We treat the odor at the whole-home level so bathrooms and kitchens are not left to air it out.",
  },
  {
    slug: "taste-odor",
    title: "Taste and odor",
    notice: "smell",
    summary:
      "Water that smells off, tastes metallic, or is unpleasant to drink and cook with.",
    detail:
      "Taste and odor often travel with iron, sulfur, or organics. Carbon and related treatment can be part of a package once we know what is in the well.",
  },
  {
    slug: "uv",
    title: "UV",
    notice: null,
    summary:
      "Ultraviolet disinfection, a typical stage in a private-well package.",
    detail:
      "City water is treated at a plant. Private wells are not. UV is a typical well-water package stage for disinfection after sediment and other treatment are in place.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Test",
    body: "Request a free water test. Tell us what you notice—stain, smell, hardness, sediment, or water you do not want to drink—and we test the well so the recommendation matches the water, not a catalog default.",
  },
  {
    n: "02",
    title: "Quote",
    body: "You get a quote based on the test and your home: whole-home filtration and treatment, a point-source RO system for drinking water, or both. We explain what each whole-home stage is for, and when RO at a dedicated faucet belongs with the package.",
  },
  {
    n: "03",
    title: "Install",
    body: "Whole-home equipment is installed near the pressure tank or where well water enters, so treated water reaches every tap. A point-source RO system, when you want one, is installed at a drinking-water faucet — typically under the sink.",
  },
  {
    n: "04",
    title: "Service",
    body: "Filters, media, UV lamps, and RO stages need periodic care. Call when the water changes or it is time for service so the system keeps doing the job it was sized for.",
  },
] as const;

export const noticeOptions = [
  { id: "stain", label: "Stain" },
  { id: "smell", label: "Smell" },
  { id: "hardness", label: "Hardness" },
  { id: "sediment", label: "Sediment" },
  { id: "drinking", label: "Drinking water / RO" },
] as const;

export const interestOptions = [
  { id: "whole-home", label: "Whole-home treatment" },
  { id: "ro", label: "Point-source RO (drinking water)" },
  { id: "both", label: "Both" },
] as const;

export const defaultDescription =
  "Whole-home water filtration and treatment, plus point-source reverse osmosis for drinking water, for Treasure Valley homes on private wells. Free water test and quote in Ada and Canyon County, Idaho.";

export const symptoms = [
  {
    slug: "stain",
    title: "Orange or rust stains",
    body: "Stains in sinks, tubs, toilets, and laundry are a common iron issue on private wells.",
    href: "/filtration#iron",
  },
  {
    slug: "smell",
    title: "Rotten-egg odor",
    body: "Sulfur smell at the tap or when hot water runs is treated at the whole-home level.",
    href: "/filtration#sulfur",
  },
  {
    slug: "hardness",
    title: "Scale, spots, stiff laundry",
    body: "Mineral hardness leaves scale on fixtures and spots on glass. Softening is the usual whole-home answer.",
    href: "/filtration#hardness",
  },
  {
    slug: "sediment",
    title: "Cloudy water or grit",
    body: "Sand, grit, and rust particles cloud water, wear fixtures, and clog screens.",
    href: "/filtration#sediment",
  },
  {
    slug: "taste-odor",
    title: "Off taste or smell",
    body: "Water that tastes metallic or smells off is often treated once we know what is in the well.",
    href: "/filtration#taste-odor",
  },
  {
    slug: "drinking",
    title: "Water you do not want to drink",
    body: "Point-source reverse osmosis polishes drinking and cooking water at a dedicated faucet.",
    href: "/contact",
  },
] as const;

export const trustItems = [
  "Free water tests and quotes",
  "Treasure Valley / Ada and Canyon County private wells",
  "Whole-home treatment plus point-source RO",
  `Sister to ${site.sister}`,
] as const;

export const faqs = [
  {
    q: "What do you treat?",
    a: "Whole-home well treatment for sediment, hardness and softening, iron, sulfur, taste and odor, and UV as a typical well-water package — plus point-source reverse osmosis for drinking and cooking water at a dedicated faucet.",
  },
  {
    q: "Do you serve my well?",
    a: `We work with ${site.audience} in ${site.areaLong}.`,
  },
  {
    q: "Is a water test free?",
    a: "Yes. Water tests and quotes are free.",
  },
  {
    q: "What is the difference between whole-home treatment and reverse osmosis?",
    a: "Whole-home treatment is installed where well water enters the house so every tap is treated. Point-source RO is a point-of-use system at one tap for drinking and cooking, typically under the sink with a dedicated faucet. It sits alongside whole-home treatment; it does not replace sediment, softening, iron, sulfur, or UV.",
  },
  {
    q: "How does a job start?",
    a: "Request a free water test. Tell us what you notice — stain, smell, hardness, sediment, or water you do not want to drink. The quote follows the test: whole-home treatment, point-source RO, or both. Install and periodic service come after.",
  },
  {
    q: "Are you Oasis Well Pump?",
    a: `${site.name} is the filtration and treatment offer. Sister services — well pump, plumbing, electrical, and backup generators — are handled by ${site.sister}, a division of ${site.parent}.`,
  },
  {
    q: "Where are you located?",
    a: `${site.addressLine}. Call ${site.phoneDisplay}.`,
  },
] as const;

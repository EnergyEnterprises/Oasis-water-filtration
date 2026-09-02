export const site = {
  name: "Oasis Water Filtration",
  shortName: "Oasis",
  domain: "oasiswaterfiltration.com",
  url: "https://oasiswaterfiltration.com",
  phoneDisplay: "208-573-0859",
  phoneHref: "tel:+12085730859",
  addressLine: "3937 East Ustick Road, Meridian, Idaho",
  street: "3937 East Ustick Road",
  city: "Meridian",
  state: "Idaho",
  stateAbbr: "ID",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=3937+East+Ustick+Road,+Meridian,+Idaho",
  sister: "Oasis Well Pump",
  parent: "Energy Enterprises LLC",
  areaShort: "Treasure Valley",
  areaLong: "Treasure Valley / Ada and Canyon County, Idaho",
  audience: "homes on private wells",
} as const;

export const nav = [
  { href: "/filtration", label: "Filtration" },
  { href: "/well-water", label: "Well water" },
  { href: "/process", label: "Process" },
  { href: "/service-area", label: "Service area" },
  { href: "/contact", label: "Contact" },
] as const;

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

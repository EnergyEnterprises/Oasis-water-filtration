import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/filtration",
  "/well-water",
  "/process",
  "/service-area",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/case-studies";
import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      priority: 1,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: now,
      priority: 0.9,
    },
    ...caseStudySlugs.map((slug) => ({
      url: `${siteUrl}/projects/${slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}

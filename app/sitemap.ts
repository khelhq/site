import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticRoutes = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/services`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/work`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${SITE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}

import { MetadataRoute } from "next";
import { getCreatorsData } from "@/sanity/schemas/creators";
import { getNewsData } from "@/sanity/schemas/news";
import { getProjectsData } from "@/sanity/schemas/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all creators for dynamic routes
  const creators = (await getCreatorsData()).creators;
  const projects = (await getProjectsData()).projects;
  const insights = (await getNewsData()).news;

  // Base URL from environment variable or default
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://createdbyhypr.com";

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic routes
  const creatorRoutes = creators.map((creator) => ({
    url: `${baseUrl}/creators/${creator.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/works/${project.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...creatorRoutes, ...projectRoutes];
}

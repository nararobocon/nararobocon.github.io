import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nararobocon.github.io",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://nararobocon.github.io/recruit",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nararobocon.github.io/voice",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://nararobocon.github.io/voice/1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: "https://nararobocon.github.io/voice/2",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: "https://nararobocon.github.io/voice/3",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: "https://nararobocon.github.io/voice/4",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}

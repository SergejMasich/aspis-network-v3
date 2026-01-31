import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://aspis-network-v3.vercel.app/sitemap.xml",
    host: "https://aspis-network-v3.vercel.app",
  };
}

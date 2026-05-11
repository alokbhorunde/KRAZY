import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // SEO Routes
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /

Sitemap: https://krazystudios.in/sitemap.xml`);
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml");
    const baseUrl = "https://krazystudios.in";
    const date = new Date().toISOString().split("T")[0];
    
    // In a real DB-backed app we might dynamically fetch projects.
    // For now we statically define known routes based on client/pages/Index.tsx
    const routes = [
      "",
      "/about",
      "/contact",
      "/project/safer",
      "/project/techsonix",
      "/project/skyminent"
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${route === "" ? "1.0" : route.startsWith("/project/") ? "0.8" : "0.7"}</priority>
  </url>`).join("\n")}
</urlset>`;

    res.send(xml);
  });

  return app;
}

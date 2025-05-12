const fs = require("fs");
const path = require("path");

// Define your routes manually
const routes = [
  "/",
  "/about",
  "/projects",
  "/experience",
  "/skills",
  "/contact",
];

// Your domain
const domain = "https://your-domain.com"; // Replace with your actual domain

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  // Write sitemap to public folder
  fs.writeFileSync(path.resolve(__dirname, "public", "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap();

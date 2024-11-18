// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || "https://happy-b-seven.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/admin",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://happy-b-seven.vercel.app/sitemap.xml"],
  },
};

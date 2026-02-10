/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jazz-circle.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
};

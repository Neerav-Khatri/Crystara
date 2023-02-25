/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      `countryflagsapi.com`,
      `banner.caratlane.com`,
      "cdn.caratlane.com",
      `web-assets.payu.in`,
    ],
  },
};

module.exports = nextConfig;

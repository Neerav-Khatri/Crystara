/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {

    domains: [
      `countryflagsapi.com`,
      `banner.caratlane.com`,
      `web-assets.payu.in`,
      `cdn.caratlane.com`
    ],

  },
};

module.exports = nextConfig

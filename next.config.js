/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  images: { unoptimized: true },

  // eslint: {
  //   ignoreDuringBuilds: true,
  //   rules: {
  //     "react/no-unescaped-entities": "off",
  //   },
  // },
  // output: "export",
};

module.exports = nextConfig;

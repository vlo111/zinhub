/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apizinhub.analysed.ai',
      },
    ],
  },
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: 'https://apizinhub.analysed.ai/',
    port: 3003
  },
};

module.exports = nextConfig;

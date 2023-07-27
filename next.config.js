/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: 'https://apizinhub.analysed.ai/',
  },
};

module.exports = nextConfig;

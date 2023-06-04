/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: 'https://dev-apizinhub.analysed.ai/api/',
  },
};

module.exports = nextConfig;

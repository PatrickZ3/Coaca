import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Coaca', // Set this to your repo name
  assetPrefix: '/Coaca/',
  trailingSlash: true, // Ensures correct routing
};

export default nextConfig;

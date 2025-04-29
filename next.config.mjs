/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['peach-high-krill-292.mypinata.cloud'], // Add your image domain here
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
    };
    return config;
  },
  basePath: '', // Ensure this is empty unless required
  assetPrefix: '', // Ensure this is empty unless required
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

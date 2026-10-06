import type { NextConfig } from "next";

// Static export for GitHub Pages; trailingSlash emits /terms/index.html etc.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

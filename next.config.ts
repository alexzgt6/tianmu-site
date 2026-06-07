import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tianmu-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

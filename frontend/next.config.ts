import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asianmarketsphilly.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "b8p9tifqnvzmwrhu.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

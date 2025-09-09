import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dthfdbabbttkfwqxlpqv.supabase.co",
        pathname: "/storage/v1/object/public/assets/**",
      },
      // should be deleted
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

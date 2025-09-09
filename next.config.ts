import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dthfdbabbttkfwqxlpqv.supabase.co",
        pathname: "/storage/v1/object/public/assets/**",
      },
    ],
  },
};

export default nextConfig;

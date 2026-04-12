import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/wp-proxy/:path*',
        destination: 'http://45.145.229.20:6411/:path*',
      },
    ]
  },
};

export default nextConfig;

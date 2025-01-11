import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode : true,
  images: {
    domains: ["lovely-flamingo-139.convex.cloud"]
  }
  
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: "/fjpacheco",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true }
  
};

export default nextConfig;

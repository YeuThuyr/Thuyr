import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/Thuyr",
  assetPrefix: "/Thuyr/",
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

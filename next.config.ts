import type { NextConfig } from "next";

const isPro = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isPro ? '/Thuyr' : '',
  output: "export",
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This project is a frontend-only marketing site, so Vercel can serve it as
  // a static Next.js export without requiring a server runtime.
  output: 'export',
};

export default nextConfig;

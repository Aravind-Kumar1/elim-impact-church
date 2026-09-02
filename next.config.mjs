/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint runs locally; skip during Vercel build to avoid FlatCompat serialization error
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

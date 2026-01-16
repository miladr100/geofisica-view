/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Desabilita ESLint durante builds para evitar problemas de compatibilidade
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Continua checando TypeScript durante builds
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'video.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.futbollibrehd.pe',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.futbollibrehd.pe',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;

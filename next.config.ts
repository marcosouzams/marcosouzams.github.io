import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Se o repositório não for username.github.io, descomente a linha abaixo
  // basePath: '/nome-do-repositorio',
};

export default nextConfig;

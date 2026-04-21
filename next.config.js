/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita export estático (para GitHub Pages)
  images: {
    unoptimized: true, // Necessário para export estático
  },
}

module.exports = nextConfig

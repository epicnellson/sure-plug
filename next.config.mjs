/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve local static assets directly; no on-the-fly optimization dependency.
    unoptimized: true,
    // Trusted hosts for remote imagery (e.g. next/image, ServiceCard photos).
    // Append new hostnames here as they come into use.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
}

export default nextConfig
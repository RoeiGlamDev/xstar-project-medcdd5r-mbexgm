

const nextConfig = {
  images: {
    domains: ['example.com'], // Replace with your image domain
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false; // Fix for client-side code
    }
    return config;
  },
  future: {
    webpack5: true, // Enable Webpack 5
  },
  optimizeFonts: true
};

export default nextConfig;
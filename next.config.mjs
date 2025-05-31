


/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // reactCompiler: true,
    nodeMiddleware: true,
  },
  webpack: (config) => {
    config.externals.push({
      'node:crypto': 'commonjs crypto',
      'node:fs': 'commonjs fs',
    });
    return config;
  }
};

export default (nextConfig);

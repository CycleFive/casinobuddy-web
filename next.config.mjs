/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Enable camelCase for CSS modules
    config.module.rules
      .find((rule) => rule.oneOf).oneOf
      .filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
      .reduce((acc, { use }) => acc.concat(use), [])
      .filter(({ options }) => options.modules)
      .forEach(({ options }) => {
        Object.assign(options.modules, { exportLocalsConvention: 'camelCase' });
      });

    return config;
  },
};

export default nextConfig;

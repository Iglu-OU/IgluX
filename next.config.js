const withPWA = require('next-pwa');

module.exports = withPWA({
  target: 'experimental-serverless-trace',
  future: { webpack5: true },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    return config;
  },
});

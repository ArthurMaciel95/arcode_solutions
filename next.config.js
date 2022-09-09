// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins");
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  i18n: {
    locales: ["en-US", "pt-BR", "es-ES"],
    defaultLocale: "pt-BR"
  },
};

module.exports = withPlugins(
  [
    withPWA({
      reactStrictMode: true,
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
      },
    }),
  ],
  nextConfig,
);

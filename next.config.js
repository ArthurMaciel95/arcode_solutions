// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins");
/** @type {import('next').NextConfig} */
module.exports = withPlugins([
  [
    withPWA,
    {
      reactStrictMode: true,
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: false,
      },
    },
  ],
  {
    reactStrictMode: true,

    images: {
      domains: ["lh3.googleusercontent.com"],
    },
    i18n: {
      /**
       * Provide the locales you want to support in your application
       */
      locales: ["en-US", "pt-BR", "es-ES"],
      /**
       * This is the default locale you want to be used when visiting
       * a non-locale prefixed path.
       */
      defaultLocale: "pt-BR",
    },
  },
]);

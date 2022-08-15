// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,
  },
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    sw: "sw.js",
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

//FAZER ESSA PORRA FUNCIONAR!!

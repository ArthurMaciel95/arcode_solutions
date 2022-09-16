/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "pt",
    locales: ["en", "pt", "es"],
    localePath: path.resolve("./public/locales")
  }
};

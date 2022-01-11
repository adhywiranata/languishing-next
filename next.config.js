module.exports = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "id", "fr"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "id",
    localeDetection: false,
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      // {
      //   domain: "languishing.adhy.dev",
      //   defaultLocale: "id",
      // },
      // {
      //   domain: "en.languishing.adhy.dev",
      //   defaultLocale: "en",
      // },
      // {
      //   domain: "fr.languishing.adhy.dev",
      //   defaultLocale: "fr",
      // },
      {
        domain: "local.tiket.com",
        defaultLocale: "id",
        http: true,
      },
      {
        domain: "en.local.tiket.com",
        defaultLocale: "en",
        http: true,
      },
      {
        domain: "fr.local.tiket.com",
        defaultLocale: "fr",
        http: true,
      },
    ],
  },
};

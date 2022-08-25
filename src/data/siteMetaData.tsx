export default {
  title: "Arcode, Criação de site para seu negócio.",
  author: "ARCODE SOLUÇÕES WEB",
  headerTitle: "Arcode, Criação de site para seu negócio.",
  description:
    "Crie seu site na ARCODE SOLUCÕES, conosco você terá seu site do seu jeito. também lhe ajudamos a alavancar seus negócios através de SEO.",
  language: "pt_BR",
  theme: "system", // system, dark or light
  siteUrl: "https://www.arcodesolucoes.com",
  siteRepo: "https://github.com/ArthurMaciel95/arcode_solutions",
  siteLogo: "https://i.imgur.com/8Q825KL.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "arthurnmrocha@gmail.com",
  keywords:
    "site,fazer,criar,arcode,fazer,plataforma,ecommerce,vendas,soluções,orçamento,seo, criar site, como aumentar minha vendas, aumentar, negócio, medidas, métricas",
  locale: "pt_BR",
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: "G-TM7B6C81E8", // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: "", // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: "giscus", // supported providers: giscus, utterances, disqus

    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: "", // supported options: pathname, url, title
      label: "", // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: "",
      // theme when dark mode
      darkTheme: "",
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
};

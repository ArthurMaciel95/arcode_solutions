import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta
            name="description"
            content="Crie seu site na ARCODE SOLUCÕES, conosco você terá seu site do seu jeito. também lhe ajudamos a alavancar seus negócios através de SEO."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:url" content="https://www.arcodesolucoes.com/" />
          <meta property="og:type" content="site_name" />
          <meta
            property="og:title"
            content="Arcode, Criação de site para seu negócio."
          />
          <meta
            name="google-site-verification"
            content="_wc3aDk7IHirXjdcsHoiv-tOsx7OkoXNvVKHxYqhpbY"
          />
          <meta
            property="og:description"
            content="Crie seu site na ARCODE SOLUCÕES, conosco você terá seu site do seu jeito. também lhe ajudamos a alavancar seus negócios através de SEO."
          />
          <meta property="og:image" content="https://i.imgur.com/8Q825KL.png" />

          <meta
            name="keywords"
            content="site,fazer,criar,arcode,fazer,plataforma,ecommerce,vendas,soluções,orçamento,seo, criar site, como aumentar minha vendas, aumentar, negócio, medidas, métricas,"
          />
          <meta name="author" content="Arthur Rocha" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://www.arcodesolucoes.com" />
          <meta
            name="twitter:title"
            content="Arcode, Criação de site para seu negócio."
          />
          <meta
            name="twitter:description"
            content="Crie seu site na ARCODE SOLUCÕES, conosco você terá seu site do seu jeito. também lhe ajudamos a alavancar seus negócios através de SEO."
          />
          <meta
            name="twitter:image"
            content="https://i.imgur.com/8Q825KL.png"
          />
          <meta name="twitter:creator" content="@ArthurRocha" />
          <meta
            name="description"
            content="Crie seu site na ARCODE SOLUCÕES, conosco você terá seu site do seu jeito. também lhe ajudamos a alavancar seus negócios através de SEO."
          />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:url" content="https://www.arcodesolucoes.com/" />
          <meta
            property="og:site_name"
            content="Crie seu site na ARCODE SOLUÇÕES WEB. temos diversos serviços para alavancar seu negócio."
          />
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

          <meta name="author" content="ARCODE SOLUÇÕES WEB" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000"
          />

          <link rel="apple-touch-icon" sizes="20x20" href="/favicon.ico" />
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

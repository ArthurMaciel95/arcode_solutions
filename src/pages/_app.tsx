import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as gtag from "../lib/gtag";
import Analytics from "../components/analytics/googleAnalytics";
import { GlobalStyles } from "../styles/globals";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    whatsapp: true;
    cancel: true;
  }
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const arcodeTheme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {
              variant: "whatsapp",
            },
            style: {
              color: "#fff",
              background: "#2ED105",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#38b718",
                color: "#fff",
              },
            },
          },
          {
            props: {
              variant: "contained",
            },
            style: {
              color: "#fff",
              background:
                "linear-gradient(90deg, rgba(73,111,249,1) 0%, rgba(88,191,255,1) 100%)",
              fontWeight: "600",
            },
          },
          {
            props: {
              variant: "cancel",
            },
            style: {
              color: "#E43B3B",
              background: "transparent",
            },
          },
        ],
      },

      MuiTextField: {
        variants: [
          {
            props: {
              variant: "outlined",
            },
            style: {
              color: "var(--font-gray-color)",

              fontWeight: "600",
              "&:hover": {
                borderColor: "grey",
              },
              "& .MuiButton-startIcon": {
                position: "absolute",
                left: 0,
              },
            },
          },
        ],
      },
    },
  });

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={arcodeTheme}>
      <SessionProvider session={session}>
        <GlobalStyles />
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={false}
        />
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;

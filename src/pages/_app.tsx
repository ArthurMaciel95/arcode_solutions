import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as gtag from "../lib/gtag";
import Analytics from "../components/analytics/googleAnalytics";
const arcodeTheme = createTheme({
  palette: {},
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {},
        },
      ],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
export default MyApp;

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as gtag from "../lib/gtag";
import Analytics from "../components/analytics/googleAnalytics";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    whatsapp: true;
    cancel: true;
  }
}

export const arcodeTheme = createTheme({
  palette: {},
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
              backgroundColor: "#25ba5d",
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
  },
});

/* const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
}); */

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

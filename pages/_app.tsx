import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const arcodeTheme = createTheme({
  palette: {},
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {},
        },
      ],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={arcodeTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;

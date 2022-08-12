import { GlobalStyles } from "../src/styles/globals";
import { ThemeProvider } from "styled-components";
import { arcodeTheme } from "../src/pages/_app";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    <>
      <arcodeTheme />
      <ThemeProvider />
      <GlobalStyles />
      <Story />
    </>;
  },
];

//PREVIEW.JS
import { GlobalStyles } from "../src/styles/globals";

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
      <GlobalStyles />
      <Story />
    </>;
  },
];

import type { Preview } from "@storybook/react";
import "../src/index.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

export const decorators = [withThemeByDataAttribute({
  themes: {
    light: "light",
    dark: "dark",
  },
  defaultTheme: "light",
  attributeName: "data-mode",
}), withThemeByDataAttribute({
    themes: {
        // nameOfTheme: 'dataAttributeForTheme',
        light: '',
        dark: 'dark',
    },
    defaultTheme: 'light',
})];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

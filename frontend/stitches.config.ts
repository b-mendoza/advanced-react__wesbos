import { createStitches } from '@stitches/react';

export const { getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      systemFonts:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
});

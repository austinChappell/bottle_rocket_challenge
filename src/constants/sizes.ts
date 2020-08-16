// External Dependencies
import { CSSProperties } from 'react';

import { mediaQueries } from './breakpoints';

// Local Dependencies
export const navButtonHeightStylesWithMediaQueries: CSSProperties = {
  height: 20,

  [`${mediaQueries.isTabletMin}`]: {
    height: 24,
  },

  [`${mediaQueries.isDesktopMin}`]: {
    height: 28,
  },
};

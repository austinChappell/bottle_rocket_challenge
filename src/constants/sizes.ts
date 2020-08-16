// External Dependencies
import { CSSProperties } from 'react';

import { mediaQueries } from './breakpoints';

// Local Dependencies
export const navButtonHeightStylesWithMediaQueries: CSSProperties = {
  height: 28,

  [`${mediaQueries.isTabletMin}`]: {
    height: 32,
  },

  [`${mediaQueries.isDesktopMin}`]: {
    height: 40,
  },
};

// External Dependencies
import { CSSProperties } from 'react';

// Local Dependencies
import { mediaQueries } from './breakpoints';

export const navButtonHeightStylesWithMediaQueries: CSSProperties = {
  height: 20,

  [`${mediaQueries.isTabletMin}`]: {
    height: 24,
  },

  [`${mediaQueries.isDesktopMin}`]: {
    height: 28,
  },
};

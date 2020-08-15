// External Dependencies
import { CSSProperties } from 'react';

// Local Dependencies
import { mediaQueries } from './breakpoints';

export const navButtonHeight = 24;

export const navButtonHeightStylesWithMediaQueries: CSSProperties = {
  height: navButtonHeight,

  [`${mediaQueries.isTabletMin}`]: {
    height: navButtonHeight * 1.2,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    height: navButtonHeight * 1.4,
  },
};

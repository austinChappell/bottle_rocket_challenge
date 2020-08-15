// External Dependencies
import { CSSProperties } from 'react';

// Local Dependencies
import { mediaQueries } from './breakpoints';

export const navButtonHeight = 32;

export const navButtonHeightStylesWithMediaQueries: CSSProperties = {
  height: navButtonHeight,
  width: navButtonHeight,

  [`${mediaQueries.isTabletMin}`]: {
    height: navButtonHeight * 1.2,
    width: navButtonHeight * 1.2,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    height: navButtonHeight * 1.4,
    width: navButtonHeight * 1.4,
  },
};

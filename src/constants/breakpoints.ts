// Local Variables
const breakPoints = {
  maxMobile: 600,
  maxTablet: 900,
};

export const mediaQueries = {
  isDesktopMin: `@media only screen and (min-width: ${breakPoints.maxTablet + 1}px)`,
  isMobileMax: `@media only screen and (max-width: ${breakPoints.maxMobile}px)`,
  isTabletMax: `@media only screen and (max-width: ${breakPoints.maxTablet}px)`,
  isTabletMin: `@media only screen and (min-width: ${breakPoints.maxMobile + 1}px)`,
};

export default breakPoints;

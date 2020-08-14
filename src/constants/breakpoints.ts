const breakPoints = {
  maxMobile: 600,
  maxTablet: 900,
};

export const mediaQueries = {
  isDesktop: `@media only screen and (min-width: ${breakPoints.maxTablet + 1}px)`,
  isMobile: `@media only screen and (max-width: ${breakPoints.maxMobile}px)`,
  isTablet: `@media only screen and (max-width: ${breakPoints.maxTablet}px)`,
};

export default breakPoints;

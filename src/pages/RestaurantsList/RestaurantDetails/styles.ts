// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import styled from 'utils/styled';

// Local Variables
const mobilePadding = 12;
const tabletPadding = 24;
const desktopPadding = 32;

export const NameBanner = styled.div({
  backgroundColor: colors.primaryDark,
  display: 'flex',
  flexDirection: 'column',
  height: 60,
  justifyContent: 'center',
  padding: `0 ${mobilePadding}px`,

  [`${mediaQueries.isTabletMin}`]: {
    height: 80,
    padding: `0 ${tabletPadding}px`,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    height: 100,
    padding: `0 ${desktopPadding}px`,
  },
});
export const DetailsContainer = styled.div({
  padding: `16px ${mobilePadding}px`,

  [`${mediaQueries.isTabletMin}`]: {
    padding: `24px ${tabletPadding}px`,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    padding: `32px ${desktopPadding}px`,
  },
});

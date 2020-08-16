// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import styled from 'utils/styled';

export const StyledNav = styled.nav({
  position: 'sticky',
  top: 0,
  zIndex: 1,
});

export const Container = styled.div(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: colors[theme.styles.navBarBackground],
  display: 'flex',
  padding: '32px 12px 8px',

  [`${mediaQueries.isTabletMin}`]: {
    padding: '32px 24px 12px',
  },
  [`${mediaQueries.isDesktopMin}`]: {
    padding: '32px 32px 12px',
  },
}));

export const TopItemContainer = styled.div({
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
});

export const Box = styled.div({
  '&:first-of-type': {
    justifyContent: 'flex-start',
  },
  '&:last-of-type': {
    justifyContent: 'flex-end',
  },

  display: 'flex',
  flex: 1,
  justifyContent: 'center',
});

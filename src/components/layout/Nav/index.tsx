// External Dependencies
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import ThemeToggleButton from 'components/layout/Nav/ThemeToggleButton';
// Internal Dependencies
import PageTitleText from 'components/shared/Text/PageTitleText';
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import { useSelectLeftNavItem, useSelectRightNavItem } from 'state/selectors/ui';
import { useAppDispatch } from 'state/store';
import styled, { useAppTheme } from 'utils/styled';

// Local Variables
const StyledNav = styled.nav({
  position: 'sticky',
  top: 0,
  zIndex: 1,
});
const Container = styled.div(({ theme }) => ({
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

const TopItemContainer = styled.div({
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
});

const Box = styled.div({
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

// Component Definition
const Nav: React.FC = () => {
  const dispatch = useAppDispatch();

  const theme = useAppTheme();

  const leftElement = useSelectLeftNavItem();
  const rightElement = useSelectRightNavItem();

  const navRef = useRef<HTMLElement>(null);

  const navRefHeight = navRef.current?.clientHeight ?? 0;

  useEffect(() => {
    dispatch({
      payload: { navHeight: navRefHeight },
      type: 'UI_SET_NAV_HEIGHT',
    });
  }, [dispatch, navRefHeight]);

  return (
    <StyledNav ref={navRef}>
      <TopItemContainer>
        <ThemeToggleButton />
      </TopItemContainer>

      <Container>
        <Box>
          {leftElement}
        </Box>

        <Box>
          <Link to="/">
            <PageTitleText color={theme.styles.navBarText}>
              Lunch Tyme
            </PageTitleText>
          </Link>
        </Box>

        <Box>
          {rightElement}
        </Box>
      </Container>
    </StyledNav>
  );
};

export default Nav;

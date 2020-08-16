// External Dependencies
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Internal Dependencies
import ThemeToggleButton from 'components/layout/Nav/ThemeToggleButton';
import PageTitleText from 'components/shared/Text/PageTitleText';
import { useResizableWindow } from 'hooks/useResizableWindow';
import { useSelectLeftNavItem, useSelectRightNavItem } from 'state/selectors/ui';
import { useAppDispatch } from 'state/store';
import { useAppTheme } from 'utils/styled';

// Local Dependencies
import {
  Box, Container, StyledNav, TopItemContainer,
} from './styles';

// Component Definition
const Nav: React.FC = () => {
  const dispatch = useAppDispatch();

  const theme = useAppTheme();

  const leftElement = useSelectLeftNavItem();
  const rightElement = useSelectRightNavItem();

  const navRef = useRef<HTMLElement>(null);

  const navRefHeight = navRef.current?.clientHeight ?? 0;

  useResizableWindow(); // this allows the nav height to update in redux

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

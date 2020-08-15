// External Dependencies
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

// Internal Dependencies
import PageTitleText from 'components/shared/Text/PageTitleText';
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import { useSelectLeftNavItem, useSelectRightNavItem } from 'state/selectors/ui';
import { useAppDispatch } from 'state/store';

// Local Variables
const Wrapper = styled.div({
  alignItems: 'center',
  backgroundColor: colors.primaryLight,
  display: 'flex',
  padding: '32px 12px 8px',
  position: 'sticky',
  top: 0,
  zIndex: 1,

  [`${mediaQueries.isTabletMin}`]: {
    padding: '32px 24px 12px',
  },
  [`${mediaQueries.isDesktopMin}`]: {
    padding: '32px 32px 12px',
  },
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
const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const leftElement = useSelectLeftNavItem();
  const rightElement = useSelectRightNavItem();

  const navRef = useRef<HTMLDivElement>(null);

  const navRefHeight = navRef.current?.clientHeight ?? 0;

  useEffect(() => {
    dispatch({
      payload: { navHeight: navRefHeight },
      type: 'UI_SET_NAV_HEIGHT',
    });
  }, [dispatch, navRefHeight]);

  return (
    <Wrapper ref={navRef}>
      <Box>
        {leftElement}
      </Box>

      <Box>
        <Link to="/">
          <PageTitleText ignoreTheme>
            Lunch Tyme
          </PageTitleText>
        </Link>
      </Box>

      <Box>
        {rightElement}
      </Box>
    </Wrapper>
  );
};

export default Header;

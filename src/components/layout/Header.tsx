// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import PageTitleText from 'components/shared/Text/PageTitleText';
import colors from 'constants/colors';

// Local Typings
export interface HeaderProps {
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
  title?: string;
}

// Local Variables
const Wrapper = styled.div({
  backgroundColor: colors.primaryLight,
  display: 'flex',
  padding: '32px 12px 12px',
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
const Header: React.FC<HeaderProps> = ({
  leftElement,
  rightElement,
  title = 'Lunch Tyme',
}) => {
  console.log('Header');

  return (
    <Wrapper>
      <Box>
        {leftElement}
      </Box>

      <Box>
        <PageTitleText>
          {title}
        </PageTitleText>
      </Box>

      <Box>
        {rightElement}
      </Box>
    </Wrapper>
  );
};

export default Header;

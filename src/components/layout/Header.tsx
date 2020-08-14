// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import colors from 'constants/colors';

// Local Variables
const Wrapper = styled.div({
  backgroundColor: colors.primaryLight,
});

// Component Definition
const Header: React.FC = ({
  children,
}) => {
  console.log('Header');

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Header;

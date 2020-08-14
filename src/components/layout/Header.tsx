// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import PageTitleText from 'components/shared/Text/PageTitleText';
// Internal Dependencies
import colors from 'constants/colors';

// Local Variables
const Wrapper = styled.div({
  backgroundColor: colors.primaryLight,
});

// Component Definition
const Header: React.FC = () => {
  console.log('Header');

  return (
    <Wrapper>
      <PageTitleText>
        Lunch Tyme
      </PageTitleText>
    </Wrapper>
  );
};

export default Header;

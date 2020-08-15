// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import colors from 'constants/colors';

// Local Dependencies
import Header from './Header';

// Local Variables
const Body = styled.div({
  alignItems: 'stretch',
  backgroundColor: colors.black,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
const Main = styled.main({
  flexGrow: 1,
});

// Component Definition
const BaseLayout: React.FC = ({
  children,
}) => (
  <Body>
    <Header />

    <Main>
      {children}
    </Main>
  </Body>
);

export default BaseLayout;

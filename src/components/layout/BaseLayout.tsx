// External Dependencies
import React from 'react';

// Internal Dependencies
import colors from 'constants/colors';
import styled from 'utils/styled';

// Local Dependencies
import Header from './Nav';

// Local Variables
const Body = styled.div({
  alignItems: 'stretch',
  backgroundColor: colors.black,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
const Main = styled.main(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

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

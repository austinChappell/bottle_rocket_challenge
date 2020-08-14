// External Dependencies
import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import colors from 'constants/colors';

// Local Dependencies
import Header, { HeaderProps } from './Header';

// Local Typings
interface Props {
  headerProps?: HeaderProps
}

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
const BaseLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  headerProps = {},
}) => {
  console.log('BaseLayout');

  return (
    <Body>
      <Header {...headerProps} />

      <Main>
        {children}
      </Main>
    </Body>
  );
};

export default BaseLayout;

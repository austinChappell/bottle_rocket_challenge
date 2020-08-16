// External Dependencies
import React from 'react';

// Local Dependencies
import { Body, Main } from './styles';
import Nav from '../Nav';

// Component Definition
const BaseLayout: React.FC = ({
  children,
}) => (
  <Body>
    <Nav />

    <Main>
      {children}
    </Main>
  </Body>
);

export default BaseLayout;

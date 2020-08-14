// External Dependencies
import React from 'react';

// Local Dependencies
import Header from './Header';

// Component Definition
const BaseLayout: React.FC = ({
  children,
}) => {
  console.log('BaseLayout');

  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default BaseLayout;

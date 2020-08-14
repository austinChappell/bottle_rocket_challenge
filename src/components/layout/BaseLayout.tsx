// External Dependencies
import React, { PropsWithChildren } from 'react';

// Local Dependencies
import Header, { HeaderProps } from './Header';

// Local Typings
interface Props {
  headerProps?: HeaderProps
}

// Component Definition
const BaseLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  headerProps = {},
}) => {
  console.log('BaseLayout');

  return (
    <>
      <Header {...headerProps} />

      {children}
    </>
  );
};

export default BaseLayout;

import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import colors from 'constants/colors';

// Local Typings
interface Props {
  from?: 'left' | 'right';
  isOpen: boolean;
}

// Local Variables
const getTranslateX = ({
  from = 'left',
  isOpen,
}: Props) => {
  if (isOpen) {
    return '0%';
  }

  return from === 'left' ? '-100%' : '100%';
};

const Wrapper = styled.div<Props>((props) => ({
  backgroundColor: colors.white,
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  transform: `translateX(${getTranslateX(props)})`,
  transition: '300ms',
}));

// Component Definition
const Drawer: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  console.log('Drawer');

  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

export default Drawer;

// External Dependencies
import React, { PropsWithChildren } from 'react';

// Internal Dependencies
import { useSelectNavHeight } from 'state/selectors/ui';
import styled from 'utils/styled';

// Local Typings
interface Props {
  from?: 'left' | 'right';
  isOpen: boolean;
}
interface WrapperProps extends Props {
  navHeight: number;
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

const Wrapper = styled.div<WrapperProps>((props) => ({
  backgroundColor: props.theme.backgroundColor,
  bottom: 0,
  left: 0,
  paddingTop: props.navHeight,
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
  const navHeight = useSelectNavHeight();

  return (
    <Wrapper
      {...props}
      navHeight={navHeight}
    >
      {children}
    </Wrapper>
  );
};

export default Drawer;

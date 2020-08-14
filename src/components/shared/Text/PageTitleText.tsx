// External Dependencies
import React from 'react';

// Local Dependencies
import Text, { TextProps } from '.';

// Component Definition
const PageTitleText: React.FC<TextProps> = ({
  as = 'h1',
  color = 'white',
  fontWeight = 'bold',
  size = 'lg',
  ...props
}) => (
  <Text
    as={as}
    color={color}
    fontWeight={fontWeight}
    size={size}
      // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export default PageTitleText;

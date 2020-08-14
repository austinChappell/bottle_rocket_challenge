// External Dependencies
import React from 'react';

// Local Dependencies
import Text, { TextProps } from '.';

// Component Definition
const BodyText: React.FC<TextProps> = ({
  as = 'p',
  color = 'black',
  fontWeight = 'normal',
  size = 'md',
  ...props
}) => (
  <Text
    as={as}
    color={color}
    fontWeight={fontWeight}
    size={size}
    {...props}
  />
);

export default BodyText;

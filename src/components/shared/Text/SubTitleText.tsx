// External Dependencies
import React from 'react';

// Local Dependencies
import Text, { TextProps } from '.';

// Component Definition
const SubTitleText: React.FC<TextProps> = ({
  as = 'h3',
  color = 'white',
  fontWeight = 'normal',
  size = 'sm',
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

export default SubTitleText;

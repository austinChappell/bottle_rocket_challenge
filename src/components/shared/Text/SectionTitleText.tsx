// External Dependencies
import React from 'react';

// Local Dependencies
import Text, { TextProps } from '.';

// Component Definition
const SectionTitleText: React.FC<TextProps> = ({
  as = 'h2',
  color = 'white',
  fontWeight = 'bold',
  size = 'md',
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

export default SectionTitleText;

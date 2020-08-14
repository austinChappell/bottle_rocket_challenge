// External Dependencies
import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import colors from 'constants/colors';

// Local Typings
enum FontSize {
  lg = 17,
  md = 16,
  sm = 12,
}
type FontColor = 'black' | 'white';
export interface TextProps {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: FontColor;
  fontWeight?: 'normal' | 'bold';
  size?: keyof typeof FontSize;
}

// Local Variables
const fontColors: Record<FontColor, string> = {
  black: colors.black,
  white: colors.white,
};

const StyledText = styled.p<TextProps>(({
  color: fontColor = 'black',
  fontWeight = 'normal',
  size = 'md',
}) => ({
  color: fontColors[fontColor],
  fontDisplay: 'swap',
  fontFamily: `"${fontWeight === 'normal' ? 'Avenir Next Regular' : 'Avenir Next Demi Bold'}", Helvetica`,
  fontSize: FontSize[size],
  fontWeight,
}));

// Component Definition
const Text: React.FC<PropsWithChildren<TextProps>> = ({
  as = 'p',
  children,
  color,
  fontWeight,
  size,
}) => {
  console.log('Text');

  return (
    <StyledText
      as={as}
      color={color}
      fontWeight={fontWeight}
      size={size}
    >
      {children}
    </StyledText>
  );
};

export default Text;

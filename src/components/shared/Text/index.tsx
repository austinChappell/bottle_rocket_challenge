// External Dependencies
import React, { PropsWithChildren } from 'react';

// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import styled, { Color } from 'utils/styled';

// Local Typings
enum FontSize {
  lg = 17,
  md = 16,
  sm = 12,
}
export interface TextProps {
  align?: 'left' | 'center' | 'right';
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: Color;
  fontWeight?: 'normal' | 'bold';
  ignoreTheme?: boolean;
  isResponsive?: boolean;
  size?: keyof typeof FontSize;
}

// Local Variables
const StyledText = styled.p<TextProps>(({
  align = 'left',
  color: fontColor = 'black',
  fontWeight = 'normal',
  ignoreTheme,
  isResponsive = true,
  size = 'md',
  theme,
}) => ({
  color: ignoreTheme ? colors[fontColor] : theme.colors[fontColor],
  fontFamily: `"${fontWeight === 'normal' ? 'Avenir Next Regular' : 'Avenir Next Demi Bold'}", Helvetica`,
  fontSize: FontSize[size],
  fontWeight,
  lineHeight: '1.0em',
  textAlign: align,

  ...isResponsive && {
    [`${mediaQueries.isTabletMin}`]: {
      fontSize: FontSize[size] * 1.3,
    },
    [`${mediaQueries.isDesktopMin}`]: {
      fontSize: FontSize[size] * 1.6,
    },
  },
}));

// Component Definition
const Text: React.FC<PropsWithChildren<TextProps>> = ({
  as = 'p',
  children,
  color,
  fontWeight,
  size,
  ...props
}) => (
  <StyledText
    as={as}
    color={color}
    fontWeight={fontWeight}
    size={size}
    {...props}
  >
    {children}
  </StyledText>
);

export default Text;

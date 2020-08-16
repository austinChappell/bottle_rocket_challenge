// External Dependencies
import React from 'react';

// Internal Dependencies
import colors from 'constants/colors';
import { Color } from 'utils/styled';

// Local Dependencies
import { svgData } from './svgData';

// Local Typings
export type IconName = 'gps' | 'sunMoon';
type IconSize = 'sm' | 'md' | 'lg';
interface Props {
  color?: Color;
  name: IconName;
  size?: IconSize;
}

// Local Variables
const iconSizes: Record<IconSize, number> = {
  lg: 32,
  md: 24,
  sm: 16,
};

// Component Definition
const Icon: React.FC<Props> = ({
  color = 'primaryDark',
  name,
  size = 'md',
}) => (
  <svg
    height={iconSizes[size]}
    width={iconSizes[size]}
    viewBox="0 0 24 24"
  >
    {svgData[name](colors[color])}
  </svg>
);

export default Icon;

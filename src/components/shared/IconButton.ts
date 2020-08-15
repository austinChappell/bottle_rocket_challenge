// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import { navButtonHeightStylesWithMediaQueries } from 'constants/sizes';

// Local Typings
interface Props {
  isResponsive?: boolean;
}

// Component Definition
const IconButton = styled.button<Props>(({ isResponsive = true }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  ...isResponsive && navButtonHeightStylesWithMediaQueries,
}));

export default IconButton;

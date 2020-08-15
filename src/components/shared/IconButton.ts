// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import { navButtonHeightStylesWithMediaQueries } from 'constants/sizes';

// Component Definition
const IconButton = styled.button({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  ...navButtonHeightStylesWithMediaQueries,
});

export default IconButton;

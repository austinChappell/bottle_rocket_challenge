// External Dependencies
import styled from '@emotion/styled';

// Local Typings
interface Props {
  height: number;
}

// Component Definition
const IconButton = styled.button<Props>(({ height }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  height,
}));

export default IconButton;

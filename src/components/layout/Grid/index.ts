// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';

// Local Typings
interface Props {
  as?: string;
}

// Local Variables
const Grid = styled.div<Props>({
  alignItems: 'stretch',
  display: 'flex',
  flexWrap: 'wrap',
});

export const GridItem = styled.div<Props>({
  flexBasis: '50%',

  [mediaQueries.isMobileMax]: {
    flexBasis: '100%',
  },
});

export default Grid;

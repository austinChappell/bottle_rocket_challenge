// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';
import styled from 'utils/styled';

// Local Variables
const padding = 16;

export const TitleContainer = styled.div({
  flexBasis: '100%',
  paddingLeft: padding,
});
export const Section = styled.section({
  flexGrow: 1,
  minHeight: 200,
  padding: '24px 24px',
});
export const Wrapper = styled.div({
  '& > *': {
    flexBasis: '50%',
    padding,

    [`${mediaQueries.isMobileMax}`]: {
      flexBasis: '100%',
    },
  },

  display: 'flex',
  flexWrap: 'wrap',
  padding: '24px 0',
});

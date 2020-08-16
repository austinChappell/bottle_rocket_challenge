// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import styled from 'utils/styled';

export const SectionNavContainer = styled.div({
  borderBottom: `1px solid ${colors.primaryDark}`,
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 48,
  paddingBottom: 24,
});

export const FilterContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,

  [`${mediaQueries.isMobileMax}`]: {
    '& > *': {
      width: '100%',
    },

    '& > *:not(:first-child)': {
      marginTop: 8,
    },
  },

  [`${mediaQueries.isTabletMin}`]: {
    '& > *:not(:first-child)': {
      marginLeft: 8,
    },

    flexDirection: 'row',
  },
});

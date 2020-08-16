// Internal Dependencies
import colors from 'constants/colors';
import styled from 'utils/styled';

export const Body = styled.div({
  alignItems: 'stretch',
  backgroundColor: colors.black,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
export const Main = styled.main(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

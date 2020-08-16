// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';
import styled from 'utils/styled';

// Local Typings
interface WrapperProps {
  backgroundImageSrc: string;
}

export const Wrapper = styled.div<WrapperProps>((props) => ({
  background: `url(${props.backgroundImageSrc})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  cursor: 'pointer',
  height: '30vw',
  minHeight: 300,
  position: 'relative',
}));

export const TextContainer = styled.div({
  background: 'url(/cellGradientBackground@2x.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  left: 0,
  padding: '0 12px',
  position: 'absolute',
  right: 0,
  top: 0,

  [`${mediaQueries.isTabletMin}`]: {
    paddingBottom: 4,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    paddingBottom: 8,
  },
});

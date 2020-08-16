// Internal Dependencies
import { mediaQueries } from 'constants/breakpoints';
import styled from 'utils/styled';

const MapContainer = styled.div({
  height: 180,

  [`${mediaQueries.isTabletMin}`]: {
    height: 250,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    height: 400,
  },
});

export default MapContainer;

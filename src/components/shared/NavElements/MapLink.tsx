// External Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

// Internal Dependencies
import mapImage from 'assets/images/icon_map@2x.png';
import { navButtonHeightStylesWithMediaQueries } from 'constants/sizes';

// Local Variables
const StyledImg = styled.img({
  ...navButtonHeightStylesWithMediaQueries,
});

// Component Definition
const MapLink: React.FC = () => (
  <Link to="/map">
    <StyledImg
      alt="go to map"
      src={mapImage}
    />
  </Link>
);

export default MapLink;

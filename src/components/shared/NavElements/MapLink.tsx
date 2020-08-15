// External Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Internal Dependencies
import mapImage from 'assets/images/icon_map@2x.png';
import { navButtonHeight } from 'constants/sizes';

// Component Definition
const MapLink: React.FC = () => (
  <Link to="/map">
    <img
      alt="go to map"
      height={navButtonHeight}
      src={mapImage}
    />
  </Link>
);

export default MapLink;

// External Dependencies
import React from 'react';

// Internal Dependencies
import Icon from 'components/shared/Icon';

// Local Typings
interface MarkerProps {
  lat: number;
  lng: number;
}

// Component Definition
const CurrentLocationIcon: React.FC<MarkerProps> = (props) => (
  <Icon
    name="gps"
    size="lg"
    {...props}
  />
);

export default CurrentLocationIcon;

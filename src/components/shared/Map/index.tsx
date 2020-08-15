// External Dependencies
import React from 'react';
import GoogleMapReact from 'google-map-react';

// Internal Dependencies
import { envKeys } from 'config/envKeys';
import { Restaurant } from 'types/api';

// Local Dependencies
import Pin from './Pin';

// Local Typings
interface Props {
  readOnly?: boolean;
  restaurants: Restaurant[]
}

// Component Definition
const Map: React.FC<Props> = ({
  readOnly,
  restaurants,
}) => {
  if (restaurants.length === 0) {
    return null;
  }

  const [firstRestaurant] = restaurants;

  return (
    <div style={{ height: 500, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: envKeys.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={firstRestaurant.location}
        defaultZoom={14}
      >
        {restaurants.map(({
          location,
          name,
        }) => (
          <Pin
            key={name}
            lat={location.lat}
            lng={location.lng}
            readOnly={readOnly}
            text={name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

import React from 'react';
import { envKeys } from 'config/envKeys';
import GoogleMapReact from 'google-map-react';

import { useSelectRestaurants, useSelectRestaurantsIsLoading } from 'state/selectors/restaurants';

import Pin from './Pin';

const Map: React.FC = () => {
  const isLoading = useSelectRestaurantsIsLoading();
  const restaurants = useSelectRestaurants();

  if (isLoading) {
    return (<div>Loading...</div>);
  }

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
            text={name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

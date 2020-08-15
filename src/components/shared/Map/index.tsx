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
  mapHeight?: number | string;
  onClickRestaurant?: (restaurant: Restaurant) => void;
  readOnly?: boolean;
  restaurants: Restaurant[]
}

// Component Definition
const Map: React.FC<Props> = ({
  mapHeight = 500,
  onClickRestaurant,
  readOnly,
  restaurants,
}) => {
  if (restaurants.length === 0) {
    return null;
  }

  const [firstRestaurant] = restaurants;

  return (
    <div style={{ height: mapHeight, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: envKeys.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={firstRestaurant.location}
        defaultZoom={14}
      >
        {restaurants.map((restaurant) => {
          const { location } = restaurant;

          return (
            <Pin
              key={restaurant.name}
              lat={location.lat}
              lng={location.lng}
              onClickRestaurant={onClickRestaurant}
              readOnly={readOnly}
              restaurant={restaurant}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

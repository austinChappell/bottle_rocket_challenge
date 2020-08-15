// External Dependencies
import React from 'react';
import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';

// Internal Dependencies
import { envKeys } from 'config/envKeys';
import { Restaurant } from 'types/api';

// Local Dependencies
import Pin from './Pin';

// Local Typings
interface WrapperProps {
  mapHeight?: number | string;
}
interface Props extends WrapperProps {
  defaultZoom?: number;
  onClickRestaurant?: (restaurant: Restaurant) => void;
  readOnly?: boolean;
  restaurants: Restaurant[];
}

// Local Variables
const Wrapper = styled.div<WrapperProps>(({ mapHeight }) => ({
  height: mapHeight,
  width: '100%',
}));

// Component Definition
const Map: React.FC<Props> = ({
  defaultZoom = 14,
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
    <Wrapper mapHeight={mapHeight}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: envKeys.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={firstRestaurant.location}
        defaultZoom={defaultZoom}
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
    </Wrapper>
  );
};

export default Map;

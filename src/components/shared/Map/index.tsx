// External Dependencies
import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import GoogleMapReact, { Props as GoogleMapReactProps } from 'google-map-react';

// Internal Dependencies
import { envKeys } from 'config/envKeys';
import { Restaurant } from 'types/api';
import { Theme } from 'utils/styled';

// Local Dependencies
import Pin from './Pin';

// Local Typings
interface WrapperProps {
  mapHeight?: number | string;
}
export interface MapProps extends WrapperProps {
  center?: GoogleMapReactProps['center'];
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
const Map: React.FC<MapProps> = ({
  center,
  defaultZoom = 14,
  mapHeight = 500,
  onClickRestaurant,
  readOnly,
  restaurants,
}) => {
  const theme = useTheme<Theme>();

  const [firstRestaurant] = restaurants;

  console.log('the user center : ', center);

  return (
    <Wrapper mapHeight={mapHeight}>
      {firstRestaurant && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: envKeys.REACT_APP_GOOGLE_MAPS_API_KEY }}
          center={center}
          defaultCenter={firstRestaurant.location}
          defaultZoom={defaultZoom}
          key={firstRestaurant.name}
          options={{
            backgroundColor: theme.backgroundColor,
            styles: theme.mapStyles,
          }}
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
      )}
    </Wrapper>
  );
};

export default Map;

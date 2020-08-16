// External Dependencies
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import GoogleMapReact, { Props as GoogleMapReactProps } from 'google-map-react';

// Internal Dependencies
import { envKeys } from 'config/envKeys';
import { useSelectGeoLocation } from 'state/selectors/general';
import { Restaurant } from 'types/api';
import { Theme } from 'utils/styled';

// Local Dependencies
import CurrentLocationIcon from './CurrentLocationIcon';
import Pin from './Pin';

// Local Typings
interface WrapperProps {
  mapHeight?: number | string;
}
export interface MapProps extends WrapperProps {
  center?: GoogleMapReactProps['center'];
  defaultZoom?: number;
  includeCurrentLocation?: boolean;
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
  includeCurrentLocation = false,
  mapHeight = 500,
  onClickRestaurant,
  readOnly,
  restaurants,
}) => {
  const [defaultCenter, setDefaultCenter] = useState<Restaurant['location'] | null>(null);

  const theme = useTheme<Theme>();

  const [firstRestaurant] = restaurants;

  const geoLocation = useSelectGeoLocation();

  useEffect(() => {
    if (firstRestaurant && !defaultCenter) {
      setDefaultCenter(firstRestaurant.location);
    }
  }, [defaultCenter, firstRestaurant]);

  return (
    <Wrapper mapHeight={mapHeight}>
      {defaultCenter && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: envKeys.REACT_APP_GOOGLE_MAPS_API_KEY }}
          center={center}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
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

          {includeCurrentLocation && geoLocation && (
            <CurrentLocationIcon
              lat={geoLocation.coords.latitude}
              lng={geoLocation.coords.longitude}
            />
          )}
        </GoogleMapReact>
      )}
    </Wrapper>
  );
};

export default Map;

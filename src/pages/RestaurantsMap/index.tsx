// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import closeImage from 'assets/images/ic_close@2x.png';
import NavLink from 'components/layout/Nav/NavLink';
import Page from 'components/layout/Page';
import Map, { MapProps } from 'components/shared/Map';
import { useSelectRestaurants } from 'state/selectors/restaurants';
import { Restaurant } from 'types/api';

// Local Dependencies
import RestaurantPreview from './RestaurantPreview';

// Component Definition
const RestaurantsMap: React.FC = () => {
  const [mapCenter, setMapCenter] = useState<MapProps['center']>(undefined);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const restaurants = useSelectRestaurants();

  console.log('map center : ', mapCenter);

  return (
    <Page
      leftNavItem={null}
      rightNavItem={(
        <NavLink
          alt="go to list"
          src={closeImage}
          to="/"
        />
      )}
      title="Map"
    >
      <Map
        center={mapCenter}
        onClickRestaurant={setSelectedRestaurant}
        restaurants={restaurants}
      />

      <RestaurantPreview
        onCenterMapOnUser={setMapCenter}
        selectedRestaurant={selectedRestaurant}
      />
    </Page>
  );
};

export default RestaurantsMap;

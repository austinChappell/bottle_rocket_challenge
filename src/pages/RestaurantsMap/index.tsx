// External Dependencies
import React, { useState } from 'react';

import Page from 'components/layout/Page';
import Map from 'components/shared/Map';
import CloseLink from 'components/shared/NavElements/CloseLink';
import { useSelectRestaurants } from 'state/selectors/restaurants';
import { Restaurant } from 'types/api';

import RestaurantPreview from './RestaurantPreview';

// Component Definition
const RestaurantsMap: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const restaurants = useSelectRestaurants();

  console.log('selected restaurant : ', selectedRestaurant);

  return (
    <Page
      leftNavItem={null}
      rightNavItem={<CloseLink />}
      title="Map"
    >
      <Map
        onClickRestaurant={setSelectedRestaurant}
        restaurants={restaurants}
      />

      {selectedRestaurant && (
        <RestaurantPreview selectedRestaurant={selectedRestaurant} />
      )}
    </Page>
  );
};

export default RestaurantsMap;

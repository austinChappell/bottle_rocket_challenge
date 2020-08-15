// External Dependencies
import React, { useState } from 'react';

import Page from 'components/layout/Page';
import Map from 'components/shared/Map';
import ListLink from 'components/shared/NavElements/ListLink';
import { useSelectRestaurants } from 'state/selectors/restaurants';
import { Restaurant } from 'types/api';

// Component Definition
const RestaurantsMap: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const restaurants = useSelectRestaurants();

  console.log('selected restaurant : ', selectedRestaurant);

  return (
    <Page
      leftNavItem={null}
      rightNavItem={<ListLink />}
      title="Map"
    >
      <Map
        onClickRestaurant={setSelectedRestaurant}
        restaurants={restaurants}
      />
    </Page>
  );
};

export default RestaurantsMap;

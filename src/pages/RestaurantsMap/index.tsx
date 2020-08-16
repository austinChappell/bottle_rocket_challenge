// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import closeImage from 'assets/images/ic_close@2x.png';
import Page from 'components/layout/Page';
import Map from 'components/shared/Map';
import NavLink from 'components/shared/NavLink';
import { useSelectRestaurants } from 'state/selectors/restaurants';
import { Restaurant } from 'types/api';

// Local Dependencies
import RestaurantPreview from './RestaurantPreview';

// Component Definition
const RestaurantsMap: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const restaurants = useSelectRestaurants();

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
        onClickRestaurant={setSelectedRestaurant}
        restaurants={restaurants}
      />

      <RestaurantPreview selectedRestaurant={selectedRestaurant} />
    </Page>
  );
};

export default RestaurantsMap;

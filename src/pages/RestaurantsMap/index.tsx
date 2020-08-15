// External Dependencies
import React from 'react';

import Page from 'components/layout/Page';
import Map from 'components/shared/Map';
import MapLink from 'components/shared/NavElements/MapLink';
import { useSelectRestaurants } from 'state/selectors/restaurants';

// Component Definition
const RestaurantsMap: React.FC = () => {
  const restaurants = useSelectRestaurants();

  return (
    <Page
      leftNavItem={null}
      rightNavItem={<MapLink />}
      title="Map"
    >
      <Map restaurants={restaurants} />
    </Page>
  );
};

export default RestaurantsMap;

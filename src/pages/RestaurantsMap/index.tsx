// External Dependencies
import React from 'react';

import Page from 'components/layout/Page';
import MapLink from 'components/shared/NavElements/MapLink';

// Component Definition
const RestaurantsMap: React.FC = () => (
  <Page
    leftNavItem={null}
    rightNavItem={<MapLink />}
    title="Map"
  >
    <div>RestaurantsMap</div>
  </Page>
);

export default RestaurantsMap;

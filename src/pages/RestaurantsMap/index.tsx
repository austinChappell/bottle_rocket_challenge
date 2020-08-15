// External Dependencies
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Page from 'components/layout/Page';
import BackButton from 'components/shared/NavElements/BackButton';
import MapLink from 'components/shared/NavElements/MapLink';

// Component Definition
const RestaurantsMap: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const handleGoToList = () => {
    history.push('/');
  };

  return (
    <Page
      leftNavItem={null}
      rightNavItem={<MapLink />}
      title="Map"
    >
      <div>RestaurantsMap</div>
    </Page>
  );
};

export default RestaurantsMap;

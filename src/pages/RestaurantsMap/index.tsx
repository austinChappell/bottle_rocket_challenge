// External Dependencies
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import closeImage from 'assets/images/ic_close@2x.png';
import NavLink from 'components/layout/Nav/NavLink';
import Page from 'components/layout/Page';
import Map, { MapProps } from 'components/shared/Map';
import { useGetFilteredRestaurants } from 'hooks/useGetFilteredRestaurants';
import { Restaurant } from 'types/api';

// Local Dependencies
import RestaurantPreview from './RestaurantPreview';

// Component Definition
const RestaurantsMap: React.FC = () => {
  const [mapCenter, setMapCenter] = useState<MapProps['center']>(undefined);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const restaurants = useGetFilteredRestaurants();

  useEffect(() => {
    const restaurantNames = restaurants.map(({ name }) => name);

    // clear the selected restaurant if
    // it is not included in new filtered results
    if (selectedRestaurant && !restaurantNames.includes(selectedRestaurant.name)) {
      setSelectedRestaurant(null);
    }
  }, [restaurants]);

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

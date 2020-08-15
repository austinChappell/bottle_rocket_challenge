// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import Drawer from 'components/layout/Drawer';
import Grid, { GridItem } from 'components/layout/Grid';
import Page from 'components/layout/Page';
import BackButton from 'components/shared/NavElements/BackButton';
import MapLink from 'components/shared/NavElements/MapLink';
import { useSelectRestaurants } from 'state/selectors/restaurants';
import { Restaurant } from 'types/api';

// Local Dependencies
import RestaurantCard from './RestaurantCard';
import RestaurantDetails from './RestaurantDetails';

// Component Definition
const RestaurantsList: React.FC = () => {
  // setting open state separately so we can keep restaurant
  // data populated in drawer as it closes
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const restaurants = useSelectRestaurants();

  const handleViewDetails = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Page
      leftNavItem={isOpen
        ? <BackButton onClick={handleClose} />
        : null}
      rightNavItem={<MapLink />}
      title="Restaurants"
    >
      <Grid as="ul">
        {restaurants.map((restaurant) => (
          <GridItem
            as="li"
            key={restaurant.name}
          >
            <RestaurantCard
              onViewDetails={handleViewDetails}
              restaurant={restaurant}
            />
          </GridItem>
        ))}
      </Grid>

      <Drawer
        isOpen={isOpen}
      >
        {selectedRestaurant && (
          <RestaurantDetails restaurant={selectedRestaurant} />
        )}
      </Drawer>
    </Page>
  );
};

export default RestaurantsList;

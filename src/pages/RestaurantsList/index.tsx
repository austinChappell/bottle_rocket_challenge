// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import backImage from 'assets/images/ic_webBack@2x.png';
import mapImage from 'assets/images/icon_map@2x.png';
import Grid, { GridItem } from 'components/layout/Grid';
import NavLink from 'components/layout/Nav/NavLink';
import NavLinkButton from 'components/layout/Nav/NavLink/NavButton';
import Page from 'components/layout/Page';
import Drawer from 'components/shared/Drawer';
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
        ? (
          <NavLinkButton
            alt="go back"
            onClick={handleClose}
            src={backImage}
          />
        )
        : null}
      rightNavItem={(
        <NavLink
          alt="go to map"
          src={mapImage}
          to="/map"
        />
      )}
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

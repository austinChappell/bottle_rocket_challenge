// External Dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Internal Dependencies
import backImage from 'assets/images/ic_webBack@2x.png';
import mapImage from 'assets/images/icon_map@2x.png';
import Drawer from 'components/layout/Drawer';
import Grid, { GridItem } from 'components/layout/Grid';
import Header from 'components/layout/Header';
import IconButton from 'components/shared/IconButton';
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
    <>
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
        <Header
          leftElement={(
            <IconButton
              onClick={handleClose}
            >
              <img
                alt="go back"
                height={24}
                src={backImage}
              />
            </IconButton>
          )}
          rightElement={(
            <Link to="/map">
              <img
                alt="go to map"
                height={24}
                src={mapImage}
              />
            </Link>
          )}
        />

        {selectedRestaurant && (
          <RestaurantDetails restaurant={selectedRestaurant} />
        )}
      </Drawer>
    </>
  );
};

export default RestaurantsList;

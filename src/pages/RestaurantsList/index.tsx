// External Dependencies
import React from 'react';

// Internal Dependencies
import Grid, { GridItem } from 'components/layout/Grid';
import { useSelectRestaurants } from 'state/selectors/restaurants';

// Local Dependencies
import RestaurantCard from './RestaurantCard';

// Component Definition
const RestaurantsList: React.FC = () => {
  const restaurants = useSelectRestaurants();

  return (
    <Grid as="ul">
      {restaurants.map((restaurant) => (
        <GridItem
          as="li"
          key={restaurant.name}
        >
          <RestaurantCard restaurant={restaurant} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default RestaurantsList;

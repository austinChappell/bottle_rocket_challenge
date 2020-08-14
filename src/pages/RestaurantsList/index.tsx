// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import Grid, { GridItem } from 'components/layout/Grid';
import { useSelectRestaurants } from 'state/selectors/restaurants';
import { Restaurant } from 'types/api';

// Local Dependencies
import RestaurantCard from './RestaurantCard';

// Component Definition
const RestaurantsList: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const restaurants = useSelectRestaurants();

  console.log({ selectedRestaurant });

  return (
    <Grid as="ul">
      {restaurants.map((restaurant) => (
        <GridItem
          as="li"
          key={restaurant.name}
        >
          <RestaurantCard
            onViewDetails={setSelectedRestaurant}
            restaurant={restaurant}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default RestaurantsList;

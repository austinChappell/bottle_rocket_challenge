// External Dependencies
import { useEffect, useState } from 'react';

// Internal Dependencies
import { useSelectFilter, useSelectRestaurants } from 'state/selectors/restaurants';
import { Restaurant } from 'types/api';

export const useGetFilteredRestaurants = () => {
  const [filteredData, setFilteredData] = useState<Restaurant[]>([]);

  const restaurants = useSelectRestaurants();
  const filter = useSelectFilter();

  useEffect(() => {
    setFilteredData(restaurants.filter((restaurant) => {
      const matchesCategory = filter.category
        ? restaurant.category === filter.category
        : true;

      const matchesSearch = filter.search.trim()
        ? restaurant.name.toLowerCase().includes(filter.search.trim().toLowerCase())
        : true;

      return matchesCategory && matchesSearch;
    }));
  }, [filter, restaurants]);

  return filteredData;
};

// External Dependencies
import { useSelector } from 'react-redux';

import { AppState } from 'state/reducers';

export const useSelectRestaurantsIsLoading = () =>
  useSelector((state: AppState) => state.restaurants.isLoading);

export const useSelectRestaurants = () =>
  useSelector((state: AppState) => state.restaurants.data);

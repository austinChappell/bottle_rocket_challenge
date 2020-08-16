// External Dependencies
import { useSelector } from 'react-redux';

import { SelectOption } from 'components/shared/Select';
import { AppState } from 'state/reducers';

export const useSelectRestaurantsIsLoading = () =>
  useSelector((state: AppState) => state.restaurants.isLoading);

export const useSelectRestaurants = () =>
  useSelector((state: AppState) => state.restaurants.data);

export const useSelectFilter = () =>
  useSelector((state: AppState) => state.restaurants.filter);

export const useSelectCategoryFilterOptions = (): SelectOption[] =>
  useSelector((state: AppState) => state.restaurants.categoryFilters.map((filter) => ({
    id: filter.label,
    label: `${filter.label} (${filter.count})`,
  })));

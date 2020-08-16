// Internal Dependencies
import { Restaurant } from 'types/api';

// Local Typings
type RestaurantsActionType =
  'RESTAURANTS_GET_FAILURE' |
  'RESTAURANTS_GET_REQUEST' |
  'RESTAURANTS_GET_SUCCESS' |
  'RESTAURANTS_SET_CATEGORIES' |
  'RESTAURANTS_SET_FILTERS' |
  'RESTAURANTS_RESET_STATE';

interface RestaurantsPayload {
  categoryFilters?: RestaurantCategoryFilter[];
  data?: Restaurant[];
  error?: Error;
  filter?: Partial<RestaurantFilter>;
}

interface RestaurantFilter {
  category: string;
  search: string;
}

export interface RestaurantCategoryFilter {
  count: number;
  label: string;
}

export interface RestaurantsState {
  categoryFilters: RestaurantCategoryFilter[];
  data: Restaurant[];
  error: Error | null;
  filter: RestaurantFilter;
  isLoading: boolean;
}

export interface RestaurantsAction {
  payload?: RestaurantsPayload;
  type: RestaurantsActionType;
}

type RestaurantsReducer = (state: RestaurantsState, action: RestaurantsAction) => RestaurantsState;

// Local Variables
const initialState: RestaurantsState = {
  categoryFilters: [],
  data: [],
  error: null,
  filter: {
    category: '',
    search: '',
  },
  isLoading: false,
};

const restaurantsReducer: RestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESTAURANTS_GET_FAILURE':
      return {
        ...state,
        error: action.payload?.error ?? null,
        isLoading: false,
      };
    case 'RESTAURANTS_GET_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'RESTAURANTS_GET_SUCCESS':
      return {
        ...state,
        data: action.payload?.data ?? [],
        error: null,
        isLoading: false,
      };
    case 'RESTAURANTS_SET_CATEGORIES':
      return {
        ...state,
        categoryFilters: action.payload?.categoryFilters ?? [],
      };
    case 'RESTAURANTS_SET_FILTERS':
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload?.filter ?? {},
        },
      };
    case 'RESTAURANTS_RESET_STATE':
      return {
        ...initialState,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default restaurantsReducer;

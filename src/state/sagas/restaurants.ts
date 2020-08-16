import {
  call, put, select,
  takeLatest,
} from 'redux-saga/effects';

import { getRestaurants } from 'api/restaurants';
import { AppState } from 'state/reducers';
import { RestaurantCategoryFilter, RestaurantsAction } from 'state/reducers/restaurants';
import { ThenArg } from 'types';
import { Restaurant } from 'types/api';

// The image urls coming in from the api are http protocol.
// We are changing them to https for increased security.
const normalizeRestaurants = (restaurants: Restaurant[]): Restaurant[] => {
  const secureImageUrl = (url: string) =>
    url.replace('http://', 'https://');

  return restaurants.map((restaurant) => ({
    ...restaurant,
    backgroundImageURL: secureImageUrl(restaurant.backgroundImageURL),
  }));
};

function* fetchRestaurants() {
  try {
    const restaurantData: ThenArg<ReturnType<typeof getRestaurants>> = yield call(getRestaurants);

    yield put<RestaurantsAction>({
      payload: { data: normalizeRestaurants(restaurantData.restaurants) },
      type: 'RESTAURANTS_GET_SUCCESS',
    });
  } catch (error) {
    yield put<RestaurantsAction>({
      payload: {
        error,
      },
      type: 'RESTAURANTS_GET_FAILURE',
    });
  }
}

function* setCategories() {
  const data: Restaurant[] = yield select((state: AppState) => state.restaurants.data);

  const categoryFilters: RestaurantCategoryFilter[] = data.reduce((
    curr: RestaurantCategoryFilter[],
    prev,
  ) => {
    const existingFilter = curr.find((cat) => cat.label === prev.category);

    if (existingFilter) {
      existingFilter.count += 1;
    } else {
      curr.push({
        count: 1,
        label: prev.category,
      });
    }

    return curr;
  }, []).sort((a, b) => (a.label > b.label ? 1 : -1));

  yield put<RestaurantsAction>({
    payload: {
      categoryFilters,
    },
    type: 'RESTAURANTS_SET_CATEGORIES',
  });
}

function* restaurantsSaga(): Generator {
  yield takeLatest<RestaurantsAction['type']>(
    'RESTAURANTS_GET_REQUEST',
    fetchRestaurants,
  );

  yield takeLatest<RestaurantsAction['type']>(
    'RESTAURANTS_GET_SUCCESS',
    setCategories,
  );
}

export default restaurantsSaga;

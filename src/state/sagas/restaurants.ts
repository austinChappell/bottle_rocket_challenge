import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import { getRestaurants } from 'api/restaurants';
import { RestaurantsAction } from 'state/reducers/restaurants';
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

function* restaurantsSaga(): Generator {
  yield takeLatest<RestaurantsAction['type']>(
    'RESTAURANTS_GET_REQUEST',
    fetchRestaurants,
  );
}

export default restaurantsSaga;

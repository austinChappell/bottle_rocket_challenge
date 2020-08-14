import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import { getRestaurants } from 'api/restaurants';
import { RestaurantsAction } from 'state/reducers/restaurants';
import { ThenArg } from 'types';

function* fetchRestaurants() {
  try {
    const restaurantData: ThenArg<ReturnType<typeof getRestaurants>> = yield call(getRestaurants);

    yield put<RestaurantsAction>({
      payload: { data: restaurantData.restaurants },
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

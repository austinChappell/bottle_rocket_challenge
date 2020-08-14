// External Dependencies
import { all } from 'redux-saga/effects';

// Local Dependencies
import restaurantsSaga from './restaurants';

function* rootSaga(): Generator {
  yield all([
    restaurantsSaga(),
  ]);
}

export default rootSaga;

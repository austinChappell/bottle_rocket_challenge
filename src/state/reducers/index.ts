// External Dependencies
import { combineReducers } from 'redux';

// Local Dependencies
import restaurants, { RestaurantsState } from './restaurants';

// Local Typings
export interface AppState {
  restaurants: RestaurantsState;
}

// Local Variables
const rootReducer = combineReducers({
  restaurants,
});

export default rootReducer;

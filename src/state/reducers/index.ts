// External Dependencies
import { combineReducers } from 'redux';

// Local Dependencies
import restaurants, { RestaurantsState } from './restaurants';
import ui, { UIState } from './ui';

// Local Typings
export interface AppState {
  restaurants: RestaurantsState;
  ui: UIState;
}

// Local Variables
const rootReducer = combineReducers({
  restaurants,
  ui,
});

export default rootReducer;

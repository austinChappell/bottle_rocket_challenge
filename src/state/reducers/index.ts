// External Dependencies
import { combineReducers } from 'redux';

// Local Dependencies
import general, { GeneralState } from './general';
import restaurants, { RestaurantsState } from './restaurants';
import ui, { UIState } from './ui';

// Local Typings
export interface AppState {
  general: GeneralState;
  restaurants: RestaurantsState;
  ui: UIState;
}

// Local Variables
const rootReducer = combineReducers({
  general,
  restaurants,
  ui,
});

export default rootReducer;

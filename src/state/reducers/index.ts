// External Dependencies
import { combineReducers } from 'redux';

// Local Dependencies
import restaurants from './restaurants';

// Local Variables
const rootReducer = combineReducers({
  restaurants,
});

export default rootReducer;

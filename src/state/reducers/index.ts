import { combineReducers } from '@reduxjs/toolkit';

import restaurants from './restaurants';

const rootReducer = combineReducers({
  restaurants,
});

export default rootReducer;

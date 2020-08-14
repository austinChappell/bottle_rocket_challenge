import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Restaurant } from 'types/api';

interface RestaurantState {
  data: Restaurant[];
  error: Error | null;
  isLoading: boolean;
}

const initialState: RestaurantState = {
  data: [],
  error: null,
  isLoading: false,
};

const restaurantsSlice = createSlice({
  initialState,
  name: 'restaurant',
  reducers: {
    getData(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    resetState() {
      return { ...initialState };
    },
    setData(state, action: PayloadAction<RestaurantState>) {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    },
    setError(state, action: PayloadAction<RestaurantState>) {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    },
  },
});

export const {
  getData,
  resetState,
  setData,
  setError,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

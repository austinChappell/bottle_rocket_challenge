// Internal Dependencies
import { getRequest } from 'api';
import { RestaurantsResponse } from 'types/api';

export const getRestaurants = (): Promise<RestaurantsResponse> => {
  // The endpoint from Bottle Rocket is having CORS issues, so I made my own.
  const url = 'https://br-challenge-data.s3.amazonaws.com/mockRestaurantData.json';

  return getRequest(url);
};

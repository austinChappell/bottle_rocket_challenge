// External Dependencies
import React, { useEffect } from 'react';

// Internal Dependencies
import { useSelectRestaurants } from 'state/selectors/restaurants';
import { useAppDispatch } from 'state/store';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const restaurants = useSelectRestaurants();

  useEffect(() => {
    dispatch({ type: 'RESTAURANTS_GET_REQUEST' });
  }, [dispatch]);

  console.log('restaurants : ', restaurants);

  return (
    <div>
      My App
    </div>
  );
};

export default App;

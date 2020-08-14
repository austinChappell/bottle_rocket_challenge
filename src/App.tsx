// External Dependencies
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// Internal Dependencies
import BaseLayout from 'components/layout/BaseLayout';
import FourOhFour from 'pages/FourOhFour';
import RestaurantsList from 'pages/RestaurantsList';
import RestaurantsMap from 'pages/RestaurantsMap';
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
    <Router>
      <BaseLayout
        headerProps={{
          rightElement: (
            <Link to="/map">
              Map
            </Link>
          ),
        }}
      >
        <Switch>
          <Route
            exact
            path="/"
          >
            <RestaurantsList />
          </Route>

          <Route path="/map">
            <RestaurantsMap />
          </Route>

          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </BaseLayout>
    </Router>
  );
};

export default App;

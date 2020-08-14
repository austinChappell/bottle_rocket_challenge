// External Dependencies
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// Internal Dependencies
import mapImage from 'assets/images/icon_map@2x.png';
import BaseLayout from 'components/layout/BaseLayout';
import FourOhFour from 'pages/FourOhFour';
import RestaurantsList from 'pages/RestaurantsList';
import RestaurantsMap from 'pages/RestaurantsMap';
import { useAppDispatch } from 'state/store';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'RESTAURANTS_GET_REQUEST' });
  }, [dispatch]);

  return (
    <Router>
      <BaseLayout
        headerProps={{
          rightElement: (
            <Link to="/map">
              <img
                alt="go to map"
                height={24}
                src={mapImage}
              />
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

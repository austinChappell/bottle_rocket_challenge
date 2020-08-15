// External Dependencies
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

// Internal Dependencies
import BaseLayout from 'components/layout/BaseLayout';
import FourOhFour from 'pages/FourOhFour';
import RestaurantsList from 'pages/RestaurantsList';
import RestaurantsMap from 'pages/RestaurantsMap';
import { useAppDispatch } from 'state/store';
import { themes } from 'utils/styled';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'RESTAURANTS_GET_REQUEST' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={themes.light}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route
              component={RestaurantsList}
              exact
              path="/"
            />

            <Route
              component={RestaurantsMap}
              path="/map"
            />

            <Route component={FourOhFour} />
          </Switch>
        </BaseLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

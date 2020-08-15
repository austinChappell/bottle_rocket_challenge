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
import { useSelectThemeVariant } from 'state/selectors/ui';
import { useAppDispatch } from 'state/store';
import { themes } from 'utils/styled';
import { setThemeInStorage } from 'utils/themeStorage';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const themeVariant = useSelectThemeVariant();

  useEffect(() => {
    dispatch({ type: 'RESTAURANTS_GET_REQUEST' });
  }, [dispatch]);

  useEffect(() => {
    const watchId = navigator.geolocation?.watchPosition((position) => {
      dispatch({
        payload: { geoLocation: position },
        type: 'GENERAL_SET_GEO_LOCATION',
      });
    });

    return () => {
      navigator.geolocation?.clearWatch(watchId);
    };
  }, [dispatch]);

  useEffect(() => {
    setThemeInStorage(themeVariant);
  }, [themeVariant]);

  return (
    <ThemeProvider theme={themes[themeVariant]}>
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

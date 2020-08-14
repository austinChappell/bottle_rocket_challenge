import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { getRestaurants } from 'api/restaurants';
import store from 'state/store';

import logo from './logo.svg';

import './App.css';

const App: React.FC = () => {
  const fetchRestaurants = async () => {
    const data = await getRestaurants();

    console.log(data.restaurants);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
};

export default App;

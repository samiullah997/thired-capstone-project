import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import HeroContainer from '../components/Container';

test('Container test', async () => {
  const heroes = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <HeroContainer hero="captain-america" />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(heroes).toMatchSnapshot();
});

import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import heroesReducer from './heroes/Reducer';

// root Reducer
const rootReducer = combineReducers({
  heroes: heroesReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(logger, thunk),
);

export default store;

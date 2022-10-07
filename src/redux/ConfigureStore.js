import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import heroesReducer from './heroes/Reducer';
import currentHeroReducer from './currentHeroe/Reducer';

// root Reducer
const rootReducer = combineReducers({
  heroes: heroesReducer,
  currentHero: currentHeroReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
  },
  applyMiddleware(logger, thunk),
);

export default store;

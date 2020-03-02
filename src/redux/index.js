// https://github.com/SamOllason/weather-app-redux-logic-example

import {createLogicMiddleware} from 'redux-logic';
import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootLogics from './logic/index';
import rootReducer from './reducers/index';

// Create middleware
const logicMiddleware = createLogicMiddleware(rootLogics, {});

// Prepare middleware to ensure Redux can use it
const composedMiddleware = compose(applyMiddleware(logicMiddleware));

// Our Redux Store is where application state is held
// Create store with reducers and all our Logic
// Persistent store
const persistConfig = {
  key: 'count',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composedMiddleware);
  const persistor = persistStore(store);
  return {store, persistor};
};

import * as React from 'react';

import Navigation from './src/components/Navigation';

// Redux Store
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Redux from './src/redux';
const {store, persistor} = Redux();

// React HOC
// https://medium.com/@bosung90/use-higher-order-component-in-react-native-df44e634e860
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);

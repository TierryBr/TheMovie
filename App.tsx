import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider as StoreProvider } from 'react-redux';

import './src/config/ReactotronConfig';

import store from './src/store';

import {Routes} from './src/routes';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
}

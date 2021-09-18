import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider as StoreProvider } from 'react-redux';
import MovieList from './src/screens/MovieList';

import './src/config/ReactotronConfig';

import store from './src/store';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <StoreProvider store={store}>
      <MovieList />
    </StoreProvider>
  );
}

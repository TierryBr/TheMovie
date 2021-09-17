import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { MovieList } from './src/screens/MovieList';

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  })

  return (
    <MovieList />
  );
}



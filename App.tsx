import React, { createContext, useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider as StoreProvider } from 'react-redux';

import './src/config/ReactotronConfig';
import { ThemeProvider } from 'styled-components'
import light from './src/themes/light';
import dark from './src/themes/dark';

import store from './src/store';

import {Routes} from './src/routes';

export const ThemeContext = createContext(null);
export default function App() {
  const [theme, setTheme] = useState(light);


  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <Routes />
      </StoreProvider>
    </ThemeProvider>

    </ThemeContext.Provider>
  );
}

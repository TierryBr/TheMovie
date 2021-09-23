import React, { useContext } from 'react';
import { Switch, Text, View } from 'react-native';
import light from '../../themes/light';
import dark from '../../themes/dark';
import {ThemeContext} from '../../../App';

import {MoreContainer, TitleInfo, Container} from './styles';

export default function More() {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  const toggleValue = () => {
    if(theme.title === 'light') return false;
    else return true
  }

  return (
    <MoreContainer>
      <Container>
        <TitleInfo>Modo escuro: </TitleInfo>
        <Switch
          onChange={toggleTheme}
          value={toggleValue()}
          thumbColor={"#f4f3f4"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </Container>
    </MoreContainer>
  );
}
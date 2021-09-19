import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../src/screens/Home';
import Search from '../src/screens/Search';
import More from '../src/screens/More';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Buscar') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Mais') {
              iconName = focused ? 'list-ul' : 'list-ul';
            }

            return <Icon name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#ececec',
          tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'}
        })}
      >
        <Screen
          name="Home"
          component={Home}
          options={{headerShown: true }}
        />
        <Screen
          name="Buscar"
          component={Search}
          options={{headerShown: false }}
        />
        <Screen
          name="Mais"
          component={More}
          options={{headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

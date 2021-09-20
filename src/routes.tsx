import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../src/screens/Home';
import Search from '../src/screens/Search';
import More from '../src/screens/More';
import Details from '../src/screens/Details';
import Header from './components/Header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
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
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            header: () => <Header title="Home"/>
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={Search}
          options={{
            headerShown: true,
            header: () => <Header showFilter={false} title="Buscar"/>
          }}
        />
        <Tab.Screen
          name="Mais"
          component={More}
          options={{
            headerShown: true,
            header: () => <Header showFilter={false} title="Mais"/>
          }}
        />
      </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Tabs}
          options={{headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            header: () => <Header showFilter={false} title="Detalhes"/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

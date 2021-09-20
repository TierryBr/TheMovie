import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../src/screens/Home';
import Search from '../src/screens/Search';
import More from '../src/screens/More';
import Details from '../src/screens/Details';
import Filter from './components/Filter';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarOptions: {
            tabBarActiveTintColor: '#fe4',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home-outline' : 'ios-home-outline';
            } else if (route.name === 'Buscar') {
              iconName = focused ? 'ios-search-outline' : 'ios-search-outline';
            } else if (route.name === 'Mais') {
              iconName = focused ? 'ios-menu-outline' : 'ios-menu-outline';
            }

            return <Icon name={iconName} size={25} color={color} style={{marginTop: 2}}/>;
          },
          tabBarActiveTintColor: '#1f2eb6',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', marginBottom: 3}
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => <Filter /> 
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={Search}
          options={{
            title: 'Buscar',
          }}
        />
        <Tab.Screen
          name="Mais"
          component={More}
          options={{
            title: 'Mais',
          }}
        />
      </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={Tabs}
          options={{
            headerShown: false, 
            
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            title: 'Detalhes',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

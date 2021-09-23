import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../src/screens/Home';
import Search from '../src/screens/Search';
import More from '../src/screens/More';
import Details from '../src/screens/Details';

import {ThemeContext} from 'styled-components/native'
const Tab = createBottomTabNavigator();

export function Routes() {
  const {colors} = useContext(ThemeContext);
  // let w = ''
  // if(`${props => props.theme.colors.background}` === '#fff') {
  //   w = 'white'
  // }else w = 'black'

console.log("aqui" + colors.text)
  return (
  <NavigationContainer>

    <Tab.Navigator
        initialRouteName={'DetailsMovie'}
        screenOptions={({ route }) => ({
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'HomeTab') {
              iconName = focused ? 'ios-home-outline' : 'ios-home-outline';
            } else if (route.name === 'SearchTab') {
              iconName = focused ? 'ios-search-outline' : 'ios-search-outline';
            } else if (route.name === 'MoreTab') {
              iconName = focused ? 'ios-menu-outline' : 'ios-menu-outline';
            }

            return <Icon name={iconName} size={25} color={color} style={{marginTop: 2}}/>;
          },
          tabBarActiveTintColor: '#6485D2',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', marginBottom: 3},
          tabBarStyle: {backgroundColor: colors.background, tabBarBorder: 'transparent'},
          
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={MoviesStackScreen}
          options={{
            title: 'Home', 
          }}
        />
        <Tab.Screen
          name="SearchTab"
          component={SearchStackScreen}
          options={{
            title: 'Buscar',
          }}
        />
        <Tab.Screen
          name="MoreTab"
          component={ConfigurationStackScreen}
          options={{
            title: 'Mais',
          }}
        />
      </Tab.Navigator>
  </NavigationContainer>

  );
}

const HomeStack = createNativeStackNavigator();

function setColor() {
  const {colors} = useContext(ThemeContext);
  return colors
}
export const MoviesStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: setColor().background},
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 1,
          },
          headerTintColor: setColor().text
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true, 
          }}
        />
        <HomeStack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            title: 'Informações do filme',
          }}
        />
      </HomeStack.Navigator>
);

const SearchStack = createNativeStackNavigator();
export const SearchStackScreen = () => (
    <SearchStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: setColor().background},
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 1,
          },
          headerTintColor: setColor().text
        }}
      >
        <SearchStack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: true, 
            title: "Pesquisar",
          }}
        />
        <SearchStack.Screen
          name="SearchResults"
          component={Home}
          options={{
            headerShown: true, 
            title: "Resultados da pesquisa"
          }}
        />
        <SearchStack.Screen
          name="MovieDetails"
          component={Details}
          options={{
            headerShown: true,
            title: 'Informações do filme',
          }}
        />
      </SearchStack.Navigator>
);


const ConfigurationStack = createNativeStackNavigator();
export const ConfigurationStackScreen = () => (
  <ConfigurationStack.Navigator 
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: setColor().background},
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 1,
      },
      headerTintColor: setColor().text
    }}
  >
    <ConfigurationStack.Screen
      name="More"
      component={More}
      options={{ 
        headerShown: true,
        title: 'Configurações',
      }}
    />
  </ConfigurationStack.Navigator>
);


import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const tabNavigator = createBottomTabNavigator({
  Menu: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused}) => (
        focused ?
        <Icon name="utensils" size={20} color="#483fc4" />
        : <Icon name="utensils" size={20} color="#ccc" />
      ),
      tabBarOptions: { 
        showIcon: true,
        activeTintColor: '#483fc4',
        inactiveTintColor: '#ccc',
      },
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      gesturesEnabled: true,
      tabBarIcon: ({ tintColor, focused }) => (
        focused ?
        <Icon name="user" solid size={20} color="#483fc4" />
        : <Icon name="user" solid size={20} color="#ccc" />
      ),
      tabBarOptions: { 
        showIcon: true,
        activeTintColor: '#483fc4',
        inactiveTintColor: '#ccc',
      },
    },
  }
}, {
  initialRouteName: 'Menu',
});

export default tabNavigator;

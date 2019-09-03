import { createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const tabNavigator = createBottomTabNavigator({
  Menu: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'My Profile',
      gesturesEnabled: true,
    },
  }
}, {
  initialRouteName: 'Menu',
});

export default tabNavigator;

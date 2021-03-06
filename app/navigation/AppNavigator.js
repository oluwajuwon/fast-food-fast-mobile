import { createStackNavigator, createAppContainer } from 'react-navigation';
import tabNavigation from './TabNavigator';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Landing from '../screens/Landing';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import OrderHistory from '../screens/OrderHistory';


const navigator = createStackNavigator({
  LandingPage: { screen: Landing,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  Signup: { screen: Signup,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  Login: { screen: Login,
    navigationOptions: {
      header:null,
      tabBarVisible: false,
    },
  },
  OrderHistory: { screen: OrderHistory,
    navigationOptions: {
      headerLeft: null,
      title: 'My Orders',
      gesturesEnabled: true,
    },
  },
  Home: { screen: tabNavigation,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
});

const AppNavigator = createAppContainer(navigator);

export default AppNavigator;

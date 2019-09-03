import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Landing from '../screens/Landing';
import Signup from '../screens/Signup';
import Login from '../screens/Login';


const navigator = createStackNavigator({
  LandingPage: { screen: Landing,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  Home: { screen: Home,
    navigationOptions: {
      headerLeft: null,
      title: 'All menu items',
      gesturesEnabled: false,
    },
  },
  Profile: { screen: Profile },
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
});

const AppNavigator = createAppContainer(navigator);

export default AppNavigator;

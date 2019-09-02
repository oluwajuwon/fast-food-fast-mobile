import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Landing from '../screens/Landing';
import Signup from '../screens/Signup';


const navigator = createStackNavigator({
  LandingPage: { screen: Landing,
    navigationOptions: {
      header:null,
      tabBarVisible: false,
    },
  },
  Home: { screen: Home },
  Profile: { screen: Profile },
  Signup: { screen: Signup,
    navigationOptions: {
      header:null,
      tabBarVisible: false,
    },
  },
});

const AppNavigator = createAppContainer(navigator);

export default AppNavigator;

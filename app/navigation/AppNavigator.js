import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Landing from '../screens/Landing';


const navigator = createStackNavigator({
  LandingPage: { screen: Landing },
  Home: { screen: Home },
  Profile: { screen: Profile },
});

const AppNavigator = createAppContainer(navigator);

export default AppNavigator;

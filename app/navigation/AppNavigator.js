import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const navigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
});

const AppNavigator = createAppContainer(navigator);

export default AppNavigator;

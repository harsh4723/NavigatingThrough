import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ListS: ListScreen,
    ImageS: ImageScreen,
    SquareS: SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
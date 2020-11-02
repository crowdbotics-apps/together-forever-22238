import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList166917Navigator from '../features/ArticleList166917/navigator';
import ArticleList166916Navigator from '../features/ArticleList166916/navigator';
import ArticleList166915Navigator from '../features/ArticleList166915/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList166917: { screen: ArticleList166917Navigator },
ArticleList166916: { screen: ArticleList166916Navigator },
ArticleList166915: { screen: ArticleList166915Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

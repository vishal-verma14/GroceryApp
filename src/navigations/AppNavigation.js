import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import {
  LoginScene,
  SignUpScene,
  ForgetPassword,
  SplashScene,
  Categories,
  DrawerContainerScene,
  HomeScene,
  IngredientScene,
  IngredientsDetailsScene,
  RecipeScene,
  SearchScene,
  RecipeListScene,
} from '../screens';

const navigationOptions = title => {
  if (!!title) {
    return {
      title,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  }
  return {header: null};
};

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScene,
    },
    Login: {
      screen: LoginScene,
      navigationOptions: navigationOptions(),
    },
    SignUp: {
      screen: SignUpScene,
      navigationOptions: navigationOptions(),
    },
    Splash: {
      screen: SplashScene,
      navigationOptions: navigationOptions(),
    },
    ForgetPassword: {
      screen: ForgetPassword,
      navigationOptions: navigationOptions(),
    },
    DrawerContainer: {
      screen: DrawerContainerScene,
    },
    Categories: {
      screen: Categories,
    },
    Recipe: {
      screen: RecipeScene,
    },
    RecipesList: {
      screen: RecipeListScene,
    },
    Ingredient: {
      screen: IngredientScene,
    },
    Search: {
      screen: SearchScene,
    },
    IngredientsDetails: {
      screen: IngredientsDetailsScene,
    },
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    defaulfNavigationOptions: ({navigation}) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontFamily: 'FallingSkyCond',
      },
    }),
  },
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainerScene,
  },
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;

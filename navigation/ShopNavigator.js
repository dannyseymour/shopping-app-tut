import { createStackNavigator} from 'react-navigation-stack';
import {create} from "react-native/jest/renderer";
import ProductsOverviewScreen from "../screens/shop/ProductOverviewScreen";
import colors from "../constants/colors";


const ProductsNavigator = createStackNavigator({
  ProductsOverviewScreen: ProductsOverviewScreen,
},
    {
      defaultNavigationOptions: {
        headerStyle:{
          backgroundColor: colors.primary,
        },
        headerTintColor: 'white'
      }
    }
    );

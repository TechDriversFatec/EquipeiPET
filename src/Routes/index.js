import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Home from '../view/HomeScreen';
import First from '../view/FirstScreen/first';
import Login from '../view/Login';
import Registro from '../view/Registro';
import Form from '../view/Form';
import Profile from '../view/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        First: {
            screen: First,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Registro: {
            screen: Registro,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Home: {
            screen: Home,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Form: {
            screen: Form,
            navigationOptions: 
            {
                headerShown: false,
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: 
            {
                headerShown: true,
            }
        },
    })
);

export default Routes;
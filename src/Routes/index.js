import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

<<<<<<< HEAD
import First from '../view/Login';
=======
import Home from '../view/HomeScreen';
import First from '../view/FirstScreen/first';
import Login from '../view/Login';
import Registro from '../view/Registro';
>>>>>>> 75d8ac879589a955d5f88804ea78368ea78b3367

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
        }
    })
);

export default Routes;
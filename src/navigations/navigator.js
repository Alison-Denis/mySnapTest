import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'


const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Home:{screen:Home},

    
},
{
    defaultNavigationOptions : stackNavigatorOptions
})

export default createAppContainer(AppNavigator)

// import React from'react';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import Login from '../screens/Login';
// import Register from '../screens/Register';
// import Home from '../screens/Home';
// import Chat from '../screens/Chat';
// import Snap from '../screens/Snap';

// export const navigationRef = React.createRef();


// const stackNavigatorOptions = {
//     headerShown:false
// }
// const AppNavigator = createStackNavigator({
//     Login: {screen:Login},
//     Register: {screen:Register},
//     Home: {screen:Home},
//     Chat: {screen:Chat},
//     Snap: {screen:Snap}
// },
// {
//     defaultNavigationOptions : stackNavigatorOptions
// });


// export function navigate(name, params) {
//     navigationRef.current?.navigate(name, params);
//   }

// export default createAppContainer(AppNavigator);

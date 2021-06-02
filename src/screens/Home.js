
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ChatScreen from './Chat'
import FrienListScreen from './FriendList'
import Camera from '../Components/camera'

function HomeScreen(){
  return(
    <Camera />
  )
}

const Tab = createBottomTabNavigator();

function Nav() {
  return (
    <NavigationContainer >
    <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Chat') {
                  iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'; 
                } else if (route.name === 'Home') {
                  iconName = focused ? 'ios-home' : 'ios-home-outline';
                } else if (route.name === 'FrienList') {
                  iconName = focused ? 'people-sharp' : 'people-outline';
                  
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeBackgroundColor:'#F1F1F1', //F1F1F1 couleur bouton tel d'Ali pour se fondre dans la masse
              inactiveBackgroundColor:'#F1F1F1',
              activeTintColor: '#e5be00',
              inactiveTintColor: 'black',
            }}
            >
      <Tab.Screen name="Chat"  component={ChatScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="FrienList" component={FrienListScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}


export default Nav;
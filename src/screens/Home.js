import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ChatScreen from './Chat'
import FriendListScreen from './FriendList'
import Camera from '../components/Camera';

function HomeScreen() {
  return (
    
    <Camera />
  );
}

const Tab = createBottomTabNavigator();

function Nav() {
  return (
    <NavigationContainer>
    <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Chat') {
                  iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
                } else if (route.name === 'Home') {
                  iconName = focused ? 'ios-home' : 'ios-home-outline';
                } else if (route.name === 'FriendList') {
                  iconName = focused ? 'people-sharp' : 'people-outline';

                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
            >
      <Tab.Screen name="Chat"  component={ChatScreen}  />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="FriendList" component={FriendListScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}


export default Nav;

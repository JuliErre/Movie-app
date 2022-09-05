import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeNavigatior,SearchNavigator,WatchListNavigator} from './CustomNavigation';
import { FontAwesome } from '@expo/vector-icons';




const Tab = createBottomTabNavigator ();

const Navigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarActiveTintColor:'purple',
      tabBarStyle:{
        backgroundColor: '#111010',
        borderTopWidth: 0,
      },
    }}
    >
      <Tab.Screen  name="Home" component={HomeNavigatior} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={size} color={color} />
        ),
      }} 
      />
      <Tab.Screen name="Search" component={SearchNavigator} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="search" size={size} color={color} />
        ),
        
        }} />

      <Tab.Screen name="WatchList" component={WatchListNavigator} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="list-ul" size={size} color={color} />
        ),
        
        }} />

    </Tab.Navigator>
  )
}


export default Navigation
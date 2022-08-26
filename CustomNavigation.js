import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

const HomeNavigatior = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export {HomeNavigatior}

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}} />

    </Stack.Navigator>
  )
}

export {SearchNavigator}
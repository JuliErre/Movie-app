import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import TrailerScreen from './screens/TrailerScreen';
import WatchListScreen from './screens/WatchListScreen';

const Stack = createNativeStackNavigator();

const HomeNavigatior = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}} />
        <Stack.Screen name="Trailer" component={TrailerScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export {HomeNavigatior}

const SearchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}} />

    </Stack.Navigator>
  )
}
export {SearchNavigator}

const WatchListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WatchListScreen">
        <Stack.Screen name="WatchListScreen" component={WatchListScreen} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}} />

    </Stack.Navigator>
  )

}

export {WatchListNavigator}
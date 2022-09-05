import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';
import Constants from 'expo-constants';

const WatchListContainer = () => {

    const watchList = useSelector(state => state.watchList);
    
  return (
    <View className="flex justify-start items-center h-full w-full pt-5  " style={{marginTop : Constants.statusBarHeight}}>
      <Text className="text-3xl font-bold text-white mb-3 ">Watch List</Text>
      <MoviesList data={watchList} isVertical/>
    </View>
  )
}

export default WatchListContainer
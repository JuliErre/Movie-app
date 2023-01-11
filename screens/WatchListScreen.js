import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WatchListContainer from '../components/watchlist/WatchListContainer'

const WatchListScreen = () => {
  return (
    <View className="bg-gray-900 flex flex-col min-h-full w-full justify-start items-start">
      <WatchListContainer/>
    </View>
    
  )
}

export default WatchListScreen
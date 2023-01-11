import { View, Text } from 'react-native'
import React from 'react'
import SearchContainer from '../components/search/SearchContainer'

const SearchScreen = () => {
  return (
    <View className="bg-gray-900 flex flex-col min-h-full w-full justify-start items-start">
      <SearchContainer/>
    </View>
  )
}

export default SearchScreen
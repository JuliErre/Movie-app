import { View, Text } from 'react-native'
import React from 'react'
import DetailContainer from '../components/DetailContainer';

const DetailScreen = ({route, navigation}) => {
    const {movie} = route.params;
  return (
    <View className="w-full min-h-full h-full bg-gray-800">
      <DetailContainer movieID={movie} navigation = {navigation}/>
    </View>
  )
}

export default DetailScreen
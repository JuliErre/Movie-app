import { View, Text } from 'react-native'
import React from 'react'
import DetailContainer from '../components/DetailContainer';

const DetailScreen = ({route, navigation}) => {
    const {movie, media} = route.params;
  return (
    <View className="w-full flex  bg-gray-700">
      <DetailContainer movieID={movie} navigation = {navigation} media={media}/>
    </View>
  )
}

export default DetailScreen
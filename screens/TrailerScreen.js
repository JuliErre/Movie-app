import { View, Text } from 'react-native'
import React from 'react'
import TrailerMovie from '../components/TrailerMovie'

const TrailerScreen = ({route,navigation}) => {
    const { movieID } = route.params;
  return (
    <View className='w-screen h-screen bg-gray-800 flex'>
      <TrailerMovie movieID={movieID}/>
    </View>
  )
}

export default TrailerScreen
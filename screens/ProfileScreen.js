import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../components/Profile'

const ProfileScreen = () => {
  return (
    <View className="bg-gray-900 min-h-screen flex items-center justify-start h-full ">
      <Profile/>
    </View>
  )
}

export default ProfileScreen
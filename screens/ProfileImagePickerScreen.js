import { View, Text } from 'react-native'
import React from 'react'
import ProfileImagePicker from '../components/profile/ProfileImagePicker'

const ProfileImagePickerScreen = () => {
  return (
    <View className="bg-gray-900 min-h-screen flex items-center justify-start h-full ">
      <ProfileImagePicker/>
    </View>
  )
}

export default ProfileImagePickerScreen
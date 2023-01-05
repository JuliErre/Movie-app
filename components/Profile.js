import { View, Text, Image } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn'


const Profile = () => {
  const userInfo = useSelector(state => state.userInfo);
  const{displayName, email,phoneNumber, photoURL, providerId} = userInfo.userInfo
  console.log(photoURL)

  return (
    <View style={{marginTop: Constants.statusBarHeight}} className="flex justify-center items-center pt-20 gap-4">
      {!photoURL ?
        <Image className="w-20 h-20 rounded-full" source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FE49954B252C628EC809C68832E9137D5926C2085D58A6510F8BBA12933F7B7E/scale?width=600&aspectRatio=1.00&format=png'}} />
        :
        <Image className="w-20 h-20 rounded-full" source={{uri: photoURL}} />
      }
      <Text className="text-2xl text-gray-300 font-bold">Hi, {displayName}</Text>
      <LogoutBtn/>
    </View>
  )
}

export default Profile
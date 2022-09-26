import { View, Text } from 'react-native'
import React from 'react'
import Login from '../components/Login'


const LoginScreen = () => {
  return (
    <View className="bg-gray-900 min-h-screen flex items-center justify-center h-full ">
      <Login/>
    </View>
  )
}

export default LoginScreen
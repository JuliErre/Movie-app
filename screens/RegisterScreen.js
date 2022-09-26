import { View, Text } from 'react-native'
import React from 'react'
import Register from '../components/Register'

const RegisterScreen = () => {
  return (
    <View  className="bg-gray-900 min-h-screen flex items-center justify-center h-full ">
      <Register/>
    </View>
  )
}

export default RegisterScreen
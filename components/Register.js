import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RegisterContainer from "./RegisterContainer";



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    


   const navigation =  useNavigation()
   
  return (
       <View
            className="flex items-center justify-center w-full"
            style={{ marginTop: Constants.statusBarHeight }}
        >
            <Text className="text-3xl text-white font-semibold mb-5"> Register</Text>
            <TextInput
                className="bg-black text-white rounded-xl w-64 p-3 mt-2"
                placeholder="Email"
                placeholderTextColor="#555555"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                className="bg-black text-white rounded-xl w-64 p-3 mt-2"
                placeholder="Password"
                placeholderTextColor="#555555"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}

            />

            <RegisterContainer email={email} password={password} />

        </View>
    
  )
}

export default Register
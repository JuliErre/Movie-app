import { View, Text,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { firebaseConfig } from '../firebase-config'

import {getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import {initializeApp} from '@firebase/app'
import { useNavigation } from '@react-navigation/native';

const LoginContainer = ({email,password}) => {
    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
           
            // ...
        })
        .catch((error) => {
            Alert.alert("Error",error.message)
        })
    }

     return (
        <View className="w-[45%] mt-4">
            <TouchableOpacity onPress={() => handleSignIn()} className="bg-purple-800 flex items-center justify-center p-3  rounded-xl">
                <Text className="text-white font-bold text-base">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                className="bg-gray-800 border-2 border-purple-800 col flex items-center justify-center p-3 rounded-xl mt-2"
            >
                <Text className="text-white font-bold text-base">Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginContainer;

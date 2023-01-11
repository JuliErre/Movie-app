import { View, Text, TextInput } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useState } from "react";
import LoginContainer from "./LoginContainer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View
            className="flex items-center justify-center w-full"
            style={{ marginTop: Constants.statusBarHeight }}
        >
            <Text className="text-3xl text-white font-semibold mb-5">
                Sign in
            </Text>
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

            <LoginContainer email={email} password={password} />
        </View>
    );
};

export default Login;

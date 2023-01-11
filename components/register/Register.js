import { View, Text, TextInput } from "react-native";
import Constants from "expo-constants";
import React, { useState } from "react";
import RegisterContainer from "./RegisterContainer";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    return (
        <View
            className="flex items-center justify-center w-full"
            style={{ marginTop: Constants.statusBarHeight }}>
            <Text className="text-3xl text-white font-semibold mb-5">
                {" "}
                Register
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
            <TextInput
                className="bg-black text-white rounded-xl w-64 p-3 mt-2"
                placeholder="Name"
                placeholderTextColor="#555555"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                className="bg-black text-white rounded-xl w-64 p-3 mt-2"
                placeholder="Surname"
                placeholderTextColor="#555555"
                value={surname}
                onChangeText={(text) => setSurname(text)}
            />

            <RegisterContainer
                email={email}
                password={password}
                name={name}
                surname={surname}
            />
        </View>
    );
};

export default Register;

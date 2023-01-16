import { View, Text, Easing } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SearchScreen from "./screens/SearchScreen";
import WatchListScreen from "./screens/WatchListScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileImagePickerScreen from "./screens/ProfileImagePickerScreen";

const Stack = createNativeStackNavigator();

const config = {

    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,

        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
}

const closeConfig = {
    animation: "timing",
    config: {
        duration: 500,
        easing: Easing.linear,
    },
}
const HomeNavigatior = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen"
        options={{
            gestureEnabled:true,
            transitionSpec: {
                open: config,
                close: closeConfig,
            },
        }}>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export { HomeNavigatior };

const SearchNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
export { SearchNavigator };

const WatchListNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="WatchListScreen">
            <Stack.Screen
                name="WatchListScreen"
                component={WatchListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export { WatchListNavigator };

const LoginNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProfileImagePicker"
                component={ProfileImagePickerScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export { LoginNavigator };

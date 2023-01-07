import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    HomeNavigatior,
    LoginNavigator,
    SearchNavigator,
    WatchListNavigator,
} from "./CustomNavigation";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    const user = useSelector((state) => state.userInfo);
    const { photoURL } = user.userInfo;
    console.log("je" + photoURL);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "purple",
                tabBarStyle: {
                    backgroundColor: "#111010",
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigatior}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="search" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="WatchList"
                component={WatchListNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="list-ul" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Login"
                component={LoginNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <View
                            className="flex"
                            style={{ display: "flex", border: "solid #fffff" }}
                        >
                            {photoURL ? (
                                <Image
                                    source={{ uri: photoURL }}
                                    style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: 50,
                                    }}
                                />
                            ) : (
                                <FontAwesome
                                    name="user"
                                    size={size}
                                    color={color}
                                />
                            )}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;

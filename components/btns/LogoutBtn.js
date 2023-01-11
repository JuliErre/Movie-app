import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteUserInfo } from "../../features/userInfo/UserInfoSlice";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { removeAllMovies } from "../../features/watchList/WatchListSlice";
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleLogout = () => {
        dispatch(deleteUserInfo());

        dispatch(removeAllMovies());

        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch((error) => {
                console.log("sign out error");
            });

        navigation.reset({
            index: 0,
            routes: [{ name: "LoginScreen" }],
        });
        navigation.navigate("LoginScreen");
    };
    return (
        <View className="w-[45%] mt-4 flex justify-center items-center">
            <TouchableOpacity
                onPress={() => handleLogout()}
                className="bg-purple-800 flex items-center justify-center p-3 w-36  rounded-xl"
            >
                <Text className="text-white font-bold text-base text-center">
                    {" "}
                    <Entypo name="log-out" size={20} color="white" /> Sign out
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LogoutBtn;

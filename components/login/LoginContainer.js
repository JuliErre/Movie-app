import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { firebaseConfig } from "../../firebase-config";

import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import {
    setAccesToken,
    setUserInfo,
    setUid,
} from "../../features/userInfo/UserInfoSlice";
import { getUserWatchList } from "../../firebase/api";
import { initWatchList } from "../../features/watchList/WatchListSlice";
const LoginContainer = ({ email, password }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [loading, setLoading] = useState(false);

    const handleSignIn = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { user } = userCredential;
                console.log(user);

                dispatch(setAccesToken(user.accessToken));
                dispatch(setUserInfo(user.providerData[0]));
                dispatch(setUid(user.uid));

                getUserWatchList(user.uid).then((watchlist) => {
                    dispatch(initWatchList(watchlist.data().movies));
                });
            })
            .then(() => {
                navigation.navigate("Profile");
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Profile" }],
                });
            })
            .catch((error) => {
                Alert.alert("Error", error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <View className="w-[45%] mt-4">
            <TouchableOpacity
                onPress={() => handleSignIn()}
                className="bg-purple-800 flex items-center justify-center p-3  rounded-xl">
                <Text className="text-white font-bold text-base">
                    {loading ? (
                        <ActivityIndicator size="small" color="#d1cccc" />
                    ) : (
                        "Login"
                    )}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                className="bg-gray-800 border-2 border-purple-800 col flex items-center justify-center p-3 rounded-xl mt-2">
                <Text className="text-white font-bold text-base">Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginContainer;

import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setProfileImage } from "../features/userInfo/UserInfoSlice";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";

const ProfileImagesList = ({ data }) => {
    return (
        <View className="flex items-center justify-center gap-2 pt-10">
            <FlatList
                data={data}
                horizontal={false}
                vertical={true}
                numColumns={3}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => "-" + item.id}
                renderItem={({ item: image }) => <ProfileImage image={image} />}
            />
        </View>
    );
};

const ProfileImage = ({ image }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const handlePress = () => {
        dispatch(setProfileImage(image.URL));
        console.log("user:----" + user.displayName);
        updateProfile(user, { photoURL: image.URL })
            .then(() => {
                // Update successful.
                console.log("update successful");
            })
            .catch((error) => {
                // An error occurred
                console.log(error);
            });
            navigation.reset({
                index: 0,
                routes: [{ name: "Profile" }],
            });
            navigation.navigate("Profile");
            setTimeout(() => {
                Toast.show("Profile image updated", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor: "green",
                });
            }, 1000);
    };

    return (
        <TouchableOpacity
            onPress={() => handlePress()}
            className="mr-3 mt-6 rounded-full flex justify-center items-center border-solid border-2 border-zinc-400"
        >
            <Image
                className="h-20 w-20 rounded-full "
                source={{ uri: image.URL }}
            />
        </TouchableOpacity>
    );
};

export default ProfileImagesList;

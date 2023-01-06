import { View, Text } from "react-native";
import React from "react";
import Constants from 'expo-constants';
import ProfileImagesList from "./ProfileImagesList";

const ProfileImagePicker = () => {
    const ProfileImgs = [
        {
            id: 1,
            URL: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FE49954B252C628EC809C68832E9137D5926C2085D58A6510F8BBA12933F7B7E/scale?width=600&aspectRatio=1.00&format=png"

        },
        {
            id: 2,
            URL: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A54AD2408AC5D22B62067076F22F884474518D792123DAF611C039FFF29C21C/scale?width=300&aspectRatio=1.00&format=png"
        },
        {
            id: 3,
            URL : "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7AF80638BF5375882B663D6B7613A431D7E5513ECE97A6BB6512F6FD22EC69B4/scale?width=300&aspectRatio=1.00&format=png"
        },
        {
            id: 4,
            URL:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/96F7D22409780B0EFDC1F76E7FA664D2A965879FD8A7D806EBF59DE172CADC20/scale?width=300&aspectRatio=1.00&format=png"
        },
        {
            id: 5,
            URL:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ECA649992C3ECF9D41FEF7629CAA0E7561824A2F5811140849FCB0C27F8A5266/scale?width=300&aspectRatio=1.00&format=png"
        },
        {
            id: 6,
            URL: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B88CBEAECC3DA517C6144BC7EA1A365C8817E0D8857CFFBB950C3F8B5FEC26A4/scale?width=300&aspectRatio=1.00&format=png"
        },
        {
            id:7 ,
            URL: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=300&aspectRatio=1.00&format=png"
        },
        {
            id: 8,
            URL: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BA2B0A0DBDAED26E6546A7533238E3F41F811DD1D3B20DF41992D856C64D9CDB/scale?width=300&aspectRatio=1.00&format=png "
        },
        {
            id: 9,
            URL:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9CA2629B7FC11ECF1D361F7351841C67E7E8C06D1FE53512E69EEE63A1D63FEB/scale?width=300&aspectRatio=1.00&format=png"
        },
        {
            id: 10,
            URL: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF685D1698DEC75CF5A941ECF0C274359D0E7B7C7865AF006CC81FA4C1119C69/scale?width=300&aspectRatio=1.00&format=png"
        }
        
    ]
    return (
        <View
            style={{ marginTop: Constants.statusBarHeight }}
            className="flex justify-center items-center pt-20 gap-4"
        >
            <Text className="text-2xl text-gray-300 font-bold">Choose your Profile image</Text>
            <ProfileImagesList data={ProfileImgs}/>
        </View>
    );
};

export default ProfileImagePicker;

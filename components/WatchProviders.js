import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiUrls from "../ApiUrls";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Localization from "expo-localization";

const WatchProviders = ({ id, media }) => {
    const baseUrlImages = "https://image.tmdb.org/t/p/original";
    const [providers, setProviders] = useState([]);
    const [country, setCountry] = useState(Localization.region);

    useEffect(() => {
        axios
            .get(`${ApiUrls.baseUrl}/${media}/${id}${ApiUrls.getProviders}`)
            .then((res) => setProviders(res.data.results.AR.flatrate))
            .catch((err) => console.log(err));
    }, []);
    return (
        <View className="my-3">
            <Text className="text-base text-white font-semibold ">
                Available on
            </Text>

            <View className="flex flex-row w-full gap-2 pt-1">
                {providers?.length > 0 ? (
                    providers?.map((provider) => (
                        <Image
                            key={provider.provider_id}
                            source={{
                                uri: `${baseUrlImages}${provider.logo_path}`,
                            }}
                            className="w-12 h-12 rounded-xl"
                        />
                    ))
                ) : (
                    <View className="w-12 h-12 rounded-xl bg-white flex justify-center items-center">
                        <MaterialCommunityIcons
                            name="theater"
                            size={32}
                            color="black"
                        />
                    </View>
                )}
            </View>
        </View>
    );
};

export default WatchProviders;

import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const DetailContainer = ({ movieID, navigation }) => {
    const baseUrlImages = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieID}?api_key=771f03b9c3d4bcaf131e7e4859fdb6f0&language=en-US`
            )
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => console.log(err));

        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=771f03b9c3d4bcaf131e7e4859fdb6f0&language=en-US`
            )
            .then((res) => {
                setCast(res.data.cast.slice(0, 12));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ScrollView className=" flex flex-col relative">
            <View className="flex relative">
                <Image
                    source={{ uri: `${baseUrlImages}${movie.backdrop_path}` }}
                    className="w-full h-80 "
                />
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.6)"]}
                    className="absolute h-full  w-full z-0"
                ></LinearGradient>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="absolute top-12 left-2 "
                >
                    <Ionicons name="arrow-back" size={35} color="black" />
                </TouchableOpacity>
            </View>

            <View className="flex flex-col  items-start justify-start bg-gray-800 w-full h-full rounded-[40px] abosulte p-6  top-[-85px]">
                <View className="flex flex-row items-center justify-between w-full">
                    <FontAwesome name="bookmark" size={25} color="yellow" />
                    <View className="flex flex-row gap-2">
                        <Text className="text-gray-500 text-lg font-bold ">
                            {movie.vote_average}/10
                        </Text>
                        <FontAwesome name="star-o" size={24} color="yellow" />
                    </View>
                </View>

                {/* <Image className="w-28 h-40 rounded-lg" source={{ uri: `${baseUrlImages}${movie.poster_path}` }}/> */}
                <Text className="text-3xl font-bold text-white mt-5">
                    {movie.title}
                </Text>
                <Text className="text-gray-300 text-sm mt-3">{movie.overview}</Text>

                <View className="flex flex-row items-start justify-between w-full">
                    <Text className="text-gray-400 text-sm mt-5">
                        {movie.release_date}
                    </Text>
                    <View className="flex flex-col max-w-[250px]">
                        <Text className="text-gray-400 text-sm mt-5">
                            {movie.genres?.map((genre) => genre.name + ", ")}
                        </Text>
                    </View>
                </View>
                <View className="flex flex-col items-start justify-start w-full">
                    <Text className="text-gray-200 text-xl font-semibold">Cast</Text>
                    <View className="flex flex-row items-center justify-start gap-2 mt-2 w-full">
                        {/* {cast.map(cast => (
                        <View className="flex flex-col items-center justify-center" key={cast.id}>
                            <Image className="w-20 h-20 rounded-lg" source={{ uri: `${baseUrlImages}${cast.profile_path}` }}/>
                            <Text className="text-gray-400 text-xs mt-1">{cast.name}</Text>

                        </View>
                    ))}
                     */}
                        <FlatList
                            data={cast}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View
                                    className="flex flex-col items-center justify-center  mr-3"
                                    key={item.id}
                                >
                                    <Image
                                        className="w-20 h-20 rounded-lg "
                                        source={{ uri: `${baseUrlImages}${item.profile_path}` }}
                                    />
                                    <Text className="text-gray-400 text-xs mt-1">
                                        {item.name}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailContainer;

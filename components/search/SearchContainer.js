import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "../movies/MoviesList";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

const SearchContainer = ({ navigation }) => {
    const ApiKey = "?api_key=771f03b9c3d4bcaf131e7e4859fdb6f0";
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let isUnmounted = false;
        axios
            .get(
                `https://api.themoviedb.org/3/search/multi${ApiKey}&language=en-US&query=${search}&page=1&include_adult=false`
            )
            .then((res) => {
                if (!isUnmounted) {
                    setMovies(res.data.results);
                }
            })
            .catch((e) => console.log(e));

        return () => {
            isUnmounted = true;
        };
    }, [search]);

    return (
        <View
            className="flex  justify-start items-center w-full pt-5"
            style={{ marginTop: Constants.statusBarHeight }}
        >
            <View className="flex relative justify-center items-center">
                <TextInput
                    placeholderTextColor="#555555"
                    className=" relative p-4 pl-12 bg-black w-64 rounded-xl text-white mt-2 placeholder:text-white"
                    placeholder="Search a movie"
                    onChangeText={setSearch}
                />
                <View className="flex absolute left-4 top-7">
                    <FontAwesome name="search" size={20} color="gray" />
                </View>
            </View>
            <View className="flex flex-col justify-center items-center wrapped max-w-44 w-50 mt-4">
                {movies.length > 0 && search.length > 0 ? (
                    <MoviesList data={movies} isVertical />
                ) : search.length === 0 ? (
                    <Text className="text-white text-center text-2xl">
                        Search a Movie or TV show
                    </Text>
                ) : (
                    <Text className="text-white text-2xl">No movies found</Text>
                )}
            </View>
        </View>
    );
};

export default SearchContainer;

import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../movies/MoviesList";
import Constants from "expo-constants";

const WatchListContainer = () => {
    const watchList = useSelector((state) => state.watchList);

    return (
        <View
            className="flex justify-start items-center h-full w-full pt-5  "
            style={{ marginTop: Constants.statusBarHeight }}>
            <Text className="text-3xl font-bold text-white mb-3 ">
                WatchList
            </Text>
            {watchList.length === 0 && (
                <Text className="text-xl font-semibold text-gray-300 mb-3 ">
                    No movies in watchlist
                </Text>
            )}
            <MoviesList data={watchList} isVertical />
        </View>
    );
};

export default WatchListContainer;

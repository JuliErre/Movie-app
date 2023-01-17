import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MoviesList from "../movies/MoviesList";
import Constants from "expo-constants";
import { useState } from "react";

const WatchListContainer = () => {
    const [loading, setLoading] = useState(true);
    const watchList = useSelector((state) => state.watchList);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 400);
    }, [watchList]);

    return (
        <View
            className="flex justify-start items-center h-full w-full pt-5  "
            style={{ marginTop: Constants.statusBarHeight }}>
            <Text className="text-3xl font-bold text-white mb-3 ">
                WatchList
            </Text>
            {watchList.length === 0 ? (
                <Text className="text-xl font-semibold text-gray-300 mb-3 ">
                    No movies in watchlist
                </Text>
            ) : loading ? (
                <ActivityIndicator color="purple" size="large" />
            ) : (
                <MoviesList data={watchList} isVertical />
            )}
        </View>
    );
};

export default WatchListContainer;

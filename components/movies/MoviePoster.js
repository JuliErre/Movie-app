import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const MoviePoster = ({ movie, isTV }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const baseUrlImages = "https://image.tmdb.org/t/p/original";
    const handlePress = () => {
        navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] });
        if (route.name === "Detail") {
            navigation.push("Detail", {
                movie: `${movie.id}`,
                media: `${
                    movie.media
                        ? movie.media
                        : movie.media_type
                        ? movie.media_type
                        : isTV
                        ? "tv"
                        : "movie"
                }`,
            });
            return;
        }
        navigation.navigate("Detail", {
            movie: `${movie.id}`,
            media: `${
                movie.media
                    ? movie.media
                    : movie.media_type
                    ? movie.media_type
                    : isTV
                    ? "tv"
                    : "movie"
            }`,
        });
    };
    return (
        <>
            {movie.poster_path && (
                <TouchableOpacity
                    onPress={() => handlePress()}
                    key={movie.id}
                    className="mr-3 mb-3">
                    <Image
                        source={{ uri: `${baseUrlImages}${movie.poster_path}` }}
                        className="h-36 w-24 rounded-lg "
                    />
                </TouchableOpacity>
            )}
        </>
    );
};

export default MoviePoster;

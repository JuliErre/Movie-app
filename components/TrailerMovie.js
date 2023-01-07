import { View,Dimensions } from "react-native";
import React, { useEffect, useState,useCallback } from "react";
import axios from "axios";
import ApiUrls from "../ApiUrls";
import YoutubePlayer from "react-native-youtube-iframe";

const TrailerMovie = ({ movieID }) => {
    const [trailer, setTrailer] = useState([]);
    const [playing, setPlaying] = useState(true);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            setStatus(state);
        } else {
            setStatus(state);
        }
    }, []);
    useEffect(() => {
        axios
            .get(
                `${ApiUrls.baseUrl}/movie/${movieID}/videos?api_key=771f03b9c3d4bcaf131e7e4859fdb6f0`
            )
            .then(
                (res) =>
                    res.data.results.length > 0 &&
                    setTrailer(
                        res.data.results.find((video) =>
                            video.name.toLowerCase().includes("trailer")
                        )
                    )
            )
            .catch((err) => console.log(err));
    }, []);

    console.log(typeof Dimensions.get("window").width);
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    return (
        <View className="flex items-center justify-center h-full w-full">
            <YoutubePlayer
                height={300}
                width={400}
                play={playing}
                videoId={trailer.key}
                onChangeState={onStateChange}
            />
        </View>
    );
};

export default TrailerMovie;

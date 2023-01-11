import { View, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "../movies/Row";
import ApiUrls from "../../ApiUrls";
import CarouselPosters from "../components/movies/CarouselPosters";

const Home = () => {
    const [data, setData] = useState();

    const windowWidth = Dimensions.get("window").width;

    useEffect(() => {
        axios
            .get(`${ApiUrls.baseUrl}${ApiUrls.popularsMovies}`)
            .then((res) => setData(res.data.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <View>
            <ScrollView className="bg-gray-900 flex flex-col gap-4 min-h-full">
                <View className=" relative flex ">
                    <ScrollView className="relative flex ">
                        <CarouselPosters
                            movies={data?.slice(0, 5)}
                            width={windowWidth}
                            height={500}
                        />
                    </ScrollView>
                </View>

                <Row
                    title="Popular"
                    category={ApiUrls.popularsMovies}
                    baseUrl={ApiUrls.baseUrl}
                    isFirstRow
                />
                <View className="flex flex-col pt-6 pb-6">
                    <Row
                        title="Popular TV Shows"
                        category={ApiUrls.popularsTV}
                        baseUrl={ApiUrls.baseUrl}
                        isTV
                    />
                    <Row
                        title="Comedy"
                        category={ApiUrls.comedyMovies}
                        baseUrl={ApiUrls.baseUrl}
                    />
                    <Row
                        title="Top Rated TV Shows"
                        category={ApiUrls.topRatedTV}
                        baseUrl={ApiUrls.baseUrl}
                        isTV
                    />
                    <Row
                        title="Action"
                        category={ApiUrls.actionMovies}
                        baseUrl={ApiUrls.baseUrl}
                    />
                    <Row
                        title="Romance"
                        category={ApiUrls.romanceMovies}
                        baseUrl={ApiUrls.baseUrl}
                    />
                    <Row
                        title="Family"
                        category={ApiUrls.familyMovies}
                        baseUrl={ApiUrls.baseUrl}
                    />
                    <Row
                        title="Drama"
                        category={ApiUrls.dramaMovies}
                        baseUrl={ApiUrls.baseUrl}
                    />
                    <Row
                        title="Horror"
                        category={ApiUrls.horrorMovies}
                        baseUrl={ApiUrls.baseUrl}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;

import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const CarouselPosters = ({ movies, width, height }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = ({ item }) => {
        return (
            <View className="flex relative">
                <Image
                    className="object-cover object-center"
                    source={{
                        uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
                    }}
                    style={{ width: width, height: height }}
                />
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,1)"]}
                    className="absolute h-full  w-full z-0"
                ></LinearGradient>

                <View className="absolute bottom-24 flex flex-col w-full items-start justify-between p-4">
                    <View
                        className={`flex flex-row items-center justify-start w-[320px] gap-10`}
                    >
                        <Text className="text-4xl font-semibold text-white">
                            {item.title}
                        </Text>
                        <MaterialIcons
                            name="play-circle-fill"
                            size={50}
                            color="rgba(90, 19, 214,1)"
                        />
                    </View>
                    <View className="flex flex-col items-start justify-start w-full pb-4">
                        <Text className="text-sm text-gray-400" numberOfLines={3}>
                            {item.overview}
                        </Text>

                        <View className="flex flex-row items-center justify-end gap-10 w-full pt-2">
                            <Text className="text-sm text-gray-400">
                                {item.release_date}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <>
            <Carousel
                layout={"default"}
                data={movies}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width}
                height={height}
                autoplay={true}
                autoplayDelay={1000}
                autoplayInterval={5000}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            {/* <Pagination
            activeDotIndex={activeSlide}
            dotsLength={movies?.length}
            containerStyle={{paddingVertical:0,position:'absolute',top:100, color:'white'}} 
            dotStyle={{width:10,height:10,borderRadius:5,backgroundColor:'white'}}
            /> */}
        </>
    );
};

export default CarouselPosters;

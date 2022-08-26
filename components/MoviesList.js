import { View, Text,FlatList } from "react-native";
import React from "react";
import MoviePoster from "./MoviePoster";

const MoviesList = ({data,isVertical}) => {
    return (
        <FlatList
            data={data}
            horizontal={!isVertical?true:false}
            numColumns={isVertical?3:1}
            key={'_'}
            keyExtractor={item => "-" + item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: movie }) =>  <MoviePoster movie={movie} />}
           
           
        />
    );
};

export default MoviesList;

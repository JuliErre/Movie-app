import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";

const Row = ({ title, category, baseUrl, isFirstRow, isTV }) => {
    const {data} = useFetch(`${baseUrl}${category}`);
    const {results:movies} =  data;
    

    return (
        <View
            className={`flex flex-col items-start justify-start gap-5 pt-8 px-8 ${
                isFirstRow && "absolute top-[350px] ml-[0.3px]"
            }`}>
            <Text className="text-white text-2xl font-bold ">{title}</Text>

            <MoviesList data={movies} isTV={isTV} />
        </View>
    );
};

export default Row;

import {Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MoviePoster = ({ movie }) => {
    const navigation = useNavigation()
    const baseUrlImages = "https://image.tmdb.org/t/p/original"
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("Detail",{movie:`${movie.id}`})} key={movie.id} className="mr-3 ">
            <Image source={{ uri: `${baseUrlImages}${movie.poster_path}` }} className='h-36 w-24 rounded-lg ' />
        </TouchableOpacity>
    )
}

export default MoviePoster
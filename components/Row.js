import { View, Text } from 'react-native'
import React ,{useEffect,useState,useLayoutEffect}from 'react'
import MoviesList from './MoviesList'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Row = ({title,category,baseUrl,isFirstRow}) => {
    const navigation = useNavigation();
    const[data,setData] = useState([]);

    
    useEffect(()=> {
        axios.get(`${baseUrl}${category}`)
        .then(res => setData(res.data.results))
        .catch(err => console.log(err))
    },[])
  

  return (
    <View className={`flex flex-col items-start justify-start gap-5 pt-8 px-8 ${isFirstRow &&'absolute top-64'}`}>

      <Text className="text-white text-2xl font-bold " >{title}</Text>
    
     <MoviesList data = {data}/>
      
      </View>
  )
}

export default Row
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect,useState } from "react";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import Row from "../components/Row";
import ApiUrls from "../ApiUrls";
import { MaterialIcons } from "@expo/vector-icons";
import CarouselPosters from "../components/CarouselPosters";




// import { FlatList } from 'react-native-web';

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const [data, setData] = useState();
  const baseUrlImages = "https://image.tmdb.org/t/p/original";

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    axios
      .get(`${ApiUrls.baseUrl}${ApiUrls.popularsMovies}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);



  return (
    <View>
      <ScrollView className="bg-gray-900 flex flex-col gap-4 min-h-full">
        {/* <StatusBar barStyle="light-content" backgroundColor="black" /> */}
        <View className=" relative flex ">
          {/* <Image
            source={{ uri: `${baseUrlImages}${data?.[1]?.backdrop_path}` }}
            style={{ width: "100%", height: 400 }}
            className=" abosolute"
          /> */}
          <ScrollView className="relative flex ">

          <CarouselPosters movies = {data?.slice(0,5)} width={windowWidth} height={500}/>
          </ScrollView>
          {/* <LinearGradient
            colors={["transparent", "rgba(0,0,0,1)"]}
            className="absolute h-full  w-full z-0"
          ></LinearGradient> */}
          {/* <View className="absolute top-32 flex flex-col w-full items-start justify-between p-4">
            <View className="flex flex-row items-center justify-start w-full gap-10">
              <Text className="text-4xl font-semibold text-white">
                {data?.[1]?.title}
              </Text>
              <MaterialIcons
                name="play-circle-fill"
                size={50}
                color="rgba(90, 19, 214,1)"
              />
            </View>
            <View className="flex flex-col items-start justify-start w-full ">
              <Text className="text-sm text-gray-400">
                {data?.[1]?.overview.slice(0, 180).length == 180 && data?.[1]?.overview.slice(0, 110) + "..." || data?.[1]?.overview.slice(0, 180)}
              </Text>

              <View className="flex flex-row items-center justify-end gap-10 w-full ">
               
                <Text className="text-sm text-gray-400">
                {data?.[1]?.release_date}
                </Text>
              </View>
            </View>
          </View> */}
          {/* 
        <View className="absolute z-10 flex flex-col gap-4 p-4 bottom-16">
        <Text className="text-2xl font-bold text-white">{data?.[0]?.title}</Text>
      </View> */}
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
// const  style = StyleSheet.create ({
//     AndroidSafeArea: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//     }
// })

export default HomeScreen;

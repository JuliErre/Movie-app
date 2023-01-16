import React from "react";
import{API_KEY, API_URL} from "@env";

const ApiUrls = {
    baseUrl: API_URL,
    popularsMovies: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    familyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    dramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    searchMovie: `/search/multi/?api_key=${API_KEY}&language=en-US&query=`,
    popularsTV: `/tv/popular?api_key=${API_KEY}`,
    topRatedTV: `/tv/top_rated?api_key=${API_KEY}`,
    getProviders: `/watch/providers?api_key=${API_KEY}`,
    // `https://api.themoviedb.org/3/search/multi${ApiKey}&language=en-US&query=${search}&page=1&include_adult=false`
};

export default ApiUrls;

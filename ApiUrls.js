import React from "react";
import{API_KEY, API_URL} from "@env";

const ApiUrls = {
    baseUrl: {API_URL},
    popularsMovies: `/discover/movie?sort_by=popularity.desc&${API_KEY}`,
    horrorMovies: `/discover/movie?${API_KEY}&with_genres=27`,
    actionMovies: `/discover/movie?${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?${API_KEY}&with_genres=35`,
    romanceMovies: `/discover/movie?${API_KEY}&with_genres=10749`,
    familyMovies: `/discover/movie?${API_KEY}&with_genres=10751`,
    dramaMovies: `/discover/movie?${API_KEY}&with_genres=18`,
    searchMovie: `/search/movie?${API_KEY}&query=`,
    popularsTV: `/tv/popular?${API_KEY}`,
    topRatedTV: `/tv/top_rated?${API_KEY}`,
    getProviders: `/watch/providers?${API_KEY}`,
};

export default ApiUrls;

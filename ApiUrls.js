import React from "react";
const ApiKey = 'api_key=771f03b9c3d4bcaf131e7e4859fdb6f0';

const  ApiUrls = {
    
     baseUrl: 'https://api.themoviedb.org/3',
     popularsMovies: `/discover/movie?sort_by=popularity.desc&${ApiKey}`,
     horrorMovies: `/discover/movie?${ApiKey}&with_genres=27`,
     actionMovies: `/discover/movie?${ApiKey}&with_genres=28`,
     comedyMovies: `/discover/movie?${ApiKey}&with_genres=35`,
     romanceMovies: `/discover/movie?${ApiKey}&with_genres=10749`,
     familyMovies: `/discover/movie?${ApiKey}&with_genres=10751`,
     dramaMovies: `/discover/movie?${ApiKey}&with_genres=18`,
     searchMovie : `/search/movie?${ApiKey}&query=`,
     popularsTV : `/tv/popular?${ApiKey}`,
     topRatedTV : `/tv/top_rated?${ApiKey}`,
     getProviders : `/watch/providers?${ApiKey}`,

    
}

export default ApiUrls
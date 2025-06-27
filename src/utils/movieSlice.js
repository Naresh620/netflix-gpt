import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    movieTrailer:null,
    PopularMovies:null,
    TopRatedMovies:null,

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMovieTrailer:(state,action)=>{
      state.movieTrailer=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.PopularMovies=action.payload
    },
    addTopRatedMovies:(state,action)=>{
      state.TopRatedMovies=action.payload;
    }
  }
});

export const { addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer; 

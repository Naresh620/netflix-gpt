import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    movieTrailer:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMovieTrailer:(state,action)=>{
      state.movieTrailer=action.payload;
    }
  }
});

export const { addNowPlayingMovies,addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer; 

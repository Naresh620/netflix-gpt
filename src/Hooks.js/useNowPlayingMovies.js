import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../utils/Contents';
import { addNowPlayingMovies } from '../utils/movieSlice';


const useNowPlayingMovies = () => {

    const dispatch=useDispatch();
    
  const fetchTMDBdata=async()=>{

    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing",API_options)

    const json=await data.json()

    dispatch(addNowPlayingMovies(json.results))

  };
useEffect(()=>{
  fetchTMDBdata();
},[]);
};

export default useNowPlayingMovies;
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../components/utils/Contents';
import { addNowPlayingMovies } from '../components/utils/movieSlice';


const useNowPlayingMovies = () => {

    const dispatch=useDispatch();
    
  const fetchTMDBdata=async()=>{

    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing",API_options)

    const json=await data.json()

    console.log("Fetched movies:", json.results);

    dispatch(addNowPlayingMovies(json.results))

  };
useEffect(()=>{
  fetchTMDBdata();
},[]);
};

export default useNowPlayingMovies;
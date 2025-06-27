import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../utils/Contents';
import { addTopRatedMovies } from '../utils/movieSlice';


const useTopRatedMovies = () => {

    const dispatch=useDispatch();
    
  const fetchTopRatedMovies=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_options)

    const json=await data.json()

    dispatch(addTopRatedMovies(json.results))

  };
useEffect(()=>{
  fetchTopRatedMovies()
},[]);
};

export default useTopRatedMovies;
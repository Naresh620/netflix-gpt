import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../utils/Contents';
import { addUpcomingMovies } from '../utils/movieSlice';


const useUpcomingMovies = () => {

    const dispatch=useDispatch();
    
  const fetchUpcomingMovies=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_options)

    const json=await data.json()

    dispatch(addUpcomingMovies(json.results))

  };
useEffect(()=>{
  fetchUpcomingMovies();
},[]);
};

export default useUpcomingMovies;
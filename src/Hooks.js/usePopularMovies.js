import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../utils/Contents';
import { addPopularMovies } from '../utils/movieSlice';


const usePopularMovies = () => {

    const dispatch=useDispatch();
    
  const fetchPopularMovies=async()=>{

    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_options)

    const json=await data.json()

    dispatch(addPopularMovies(json.results))

  };
useEffect(()=>{
  fetchPopularMovies()
},[]);
};

export default usePopularMovies;
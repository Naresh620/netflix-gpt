import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../components/utils/movieSlice';
import { API_options } from '../components/utils/Contents';

const useMovieTrailer = ({movieId}) => {
   const dispatch=useDispatch();

    const fetchTrailerVideo=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_options);

        const json= await data.json();

         const filtervideo = json.results?.filter((video) => video.type === "Trailer");

         const trailer=filtervideo.length?filtervideo[0]:json.results[0]

         dispatch(addMovieTrailer(trailer))

    }
useEffect(()=>{
    fetchTrailerVideo();
},[])
}

export default useMovieTrailer
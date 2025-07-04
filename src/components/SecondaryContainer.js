import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecondaryContainer= () => {
  const  movies=useSelector((store)=>store.movies)

  return (
  movies &&(
    <div className='bg-black'> 
    <div className='-mt-52 pl-12 relative z-20'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlaying} />
      <MoviesList title={"Top Rated"} movies={movies.TopRatedMovies} />
      <MoviesList title={"Popular"} movies={movies.PopularMovies} />
      <MoviesList title={"Horror"} movies={movies.nowPlaying} />
      <MoviesList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
    </div>
    </div>)

  )
}

export default SecondaryContainer;
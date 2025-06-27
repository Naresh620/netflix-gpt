import React from 'react'
import { Movie_CDN } from '../utils/Contents'

const MovieCard = ({path}) => {

    if(!path)return null;
  return (
    <div className='w-40  pr-4'>
      <img
      alt="movie-logo"
      src={Movie_CDN+ path}
      />  
    </div>
  )
}

export default MovieCard
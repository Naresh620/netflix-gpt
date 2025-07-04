import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks.js/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.movieTrailer);

  useMovieTrailer({ movieId });

  return (
    <div className='w-full aspect-video -z-10'>
      <iframe
        className='w-full aspect-video'
        src={`https://www.youtube.com/embed/${trailerId?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allowFullScreen
        referrerPolicy="no-referrer"
      >
      </iframe>
    </div>
  );
};

export default VideoBackground;

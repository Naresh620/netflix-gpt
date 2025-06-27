import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="">
    <h1 className="text-white text-3xl py-4">{title}</h1>
      <div className="flex overflow-auto no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

import useNowPlayingMovies from "../Hooks.js/useNowPlayingMovies";
import usePopularMovies from "../Hooks.js/usePopularMovies";
import useTopRatedMovies from "../Hooks.js/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="">
      <Header />
      {/*
    - main Container
       -background 
       -title description
    - secondary Container
       -movie list * n
       - 
       */}

      <MainContainer />

      {/* <SecondaryComponent/> */}

      <SecondaryContainer/>
    </div>
  );
};

export default Browse;

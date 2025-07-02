import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks.js/useNowPlayingMovies";
import usePopularMovies from "../Hooks.js/usePopularMovies";
import useTopRatedMovies from "../Hooks.js/useTopRatedMovies";
import useUpcomingMovies from "../Hooks.js/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showgptview = useSelector((store) => store.gpt.ShowGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="">
      <Header />
      {showgptview ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

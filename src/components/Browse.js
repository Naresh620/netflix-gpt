import useNowPlayingMovies from '../Hooks.js/useNowPlayingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
// import SecondaryComponent from './SecondaryComponent';



const Browse = () => {
  useNowPlayingMovies();

  return (
    <div><Header/>
    { /*
    - main Container
       -background 
       -title description
    - secondary Container
       -movie list * n
       - 
       */}

        <MainContainer />

       {/* <SecondaryComponent/> */}
    </div>
  )
}


export default Browse
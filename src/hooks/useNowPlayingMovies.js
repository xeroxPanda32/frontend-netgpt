import { API_OPTIONS} from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react';

const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();

    const nowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const finalData = await data.json();
      console.log(finalData.results) //printed twice cz in development mode react strictmode(index.js) renders again to look for any inconsistency in our rendering cycle and give error if there is
      dispatch(addNowPlayingMovies(finalData.results));
      }
  
    useEffect(() => {
      nowPlayingMovies();
    }, [])

}

export default useNowPlayingMovies;
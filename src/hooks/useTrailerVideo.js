import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice'

//fetchong trailer vid and updating store

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const nowPlayingVids = async () => {
        const movieVids = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const finalMovieVids = await movieVids.json();
        const filterData = finalMovieVids.results.filter((el) => el.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : finalMovieVids.results[0];
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        nowPlayingVids();
    }, [])


}

export default useTrailerVideo;
import React from "react"
import { useSelector } from "react-redux"
import useTrailerVideo from "../hooks/useTrailerVideo"



const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useTrailerVideo(movieId);
   

    return (  // gto utube put the id of vid for yt there , go to share, web, copy and paste ///aspect-video// youtube autoplay embed
        <div>
            <iframe className=' w-screen h-screen'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1"}//{"https://www.youtube.com/embed/u3QMjSoi2dA?si="+trailer.key}
                title="YouTube video player" allow="accelerometer;
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground
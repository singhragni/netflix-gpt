
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addYouTubekey} from "../Slices/movieSlice"
import { options } from "../utils/Constant";


const useBackGroundVideoHook = () =>{
    const dispatch = useDispatch();
    useEffect((
        
    ) =>{
        movieVideo()
    },[])

    const movieVideo = async () =>{
        const video = await fetch("https://api.themoviedb.org/3/movie/950387/videos",options)
        const data = await video.json();

        // filter video which has type trailor.

        const trailorData = data.results.filter(value => value.name === 'Official Trailer')
        dispatch(addYouTubekey(trailorData[0].key))
        
        

    }
}


export default useBackGroundVideoHook;
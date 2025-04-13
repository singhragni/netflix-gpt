
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addMovies } from '../Slices/movieSlice';
import {options} from "../utils/Constant"

const useMovieHook = () =>{
    const dispatch = useDispatch();
    useEffect(() =>{
        listMovieData();
    },[])
    const listMovieData = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options );
        const json = await data.json();
        dispatch(addMovies(json.results));

    }
}

export default useMovieHook;


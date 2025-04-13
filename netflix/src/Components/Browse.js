import useMovieHook from '../Hooks/useMovieHook'
import Header from "./Header";
import MainContaior from './MainContainer';
import SecondryContainer from './SecoundryContainer'


const Browse = () =>{
    useMovieHook();
    return (

        <>
        <Header/>
        <MainContaior/>
        <SecondryContainer/>
        </>
        /**
         * MainContaior
         * - videoBackground
         * - videoTitle
         *Secondry container
         - movies lists
          -- they are cards

         */
    )
}


export default Browse;
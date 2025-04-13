import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackGround";

const MainContaior = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
//   console.log(mainMovie);
//   console.log(mainMovie.overview);
  return (
    <div>
      <VideoTitle
        titleName={mainMovie?.original_title}
        description={mainMovie?.overview}
      />
      <VideoBackground  movieId = {mainMovie.id}/>
    </div>
  );
};

export default MainContaior;

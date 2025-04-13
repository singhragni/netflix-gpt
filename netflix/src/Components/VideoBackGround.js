import useBackGroundVideoHook from "../Hooks/useBackGroundVideoHook";

const VideoBackground = ({ movieId }) => {
  useBackGroundVideoHook();
  return (
    <div>
      <iframe
       className="w-screen aspect-video"
        src="https://www.youtube.com/embed/wJO_vIDZn-I?si=PyGdgP1C_0DZTadx?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

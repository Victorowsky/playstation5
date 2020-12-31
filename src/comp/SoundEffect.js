import React from "react";
import ReactPlayer from "react-player/lazy";

const SoundEffect = ({ isPlaying, isMuted }) => {
  return (
    <ReactPlayer
      playing={isPlaying}
      volume={1}
      muted={isMuted}
      loop={true}
      style={{ display: "none" }}
      url="https://www.youtube.com/watch?v=rN4Y7mGlH8c"
    />
  );
};

export default SoundEffect;

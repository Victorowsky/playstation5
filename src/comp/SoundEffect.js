import React from "react";
import ReactPlayer from "react-player/lazy";

const SoundEffect = ({ isPlaying }) => {
  return (
    <ReactPlayer
      playing={isPlaying}
      style={{ display: "none" }}
      url="https://www.youtube.com/watch?v=rN4Y7mGlH8c"
    />
  );
};

export default SoundEffect;

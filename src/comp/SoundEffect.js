import { useEffect } from "react";
import useSound from "use-sound";
import alarm from "../alarm.mp3";
const BoopButton = ({ data }) => {
  const [play, { stop, isPlaying }] = useSound(alarm, {
    volume: "0.10",
  });
  const available = data.filter((element) => {
    if (element !== "DOSTĘPNY") {
      return element;
    }
  });
  let isSoundPlayed = false;

  // console.log(available);
  if (available.length && !isSoundPlayed) {
    if (!isPlaying) play();
    isSoundPlayed = true
  } 

  // getAudioContext().resume();

  return (
    <button style={{ position: "absolute", display: "none" }} onClick={play}>
      Boop!
    </button>
  );
};

export default BoopButton;

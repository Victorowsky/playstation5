
import useSound from 'use-sound';
import alarm from '../alarm.mp3';
const BoopButton = ({data}) => {


  const [play, {stop, isPlaying}] = useSound(alarm, {volume: "0.10"});
 const available = data.filter(element => {
    if(element === "DOSTĘPNY"){
      return element
    }
    return null
  });

  if(available.length > 0){
    if(!isPlaying)
    play()
    setTimeout(() => {
      stop()
      available.length = 0
    }, 5000);
  }
  // StartAudioContext(Tone.context)

  



  return <button style={{position:"absolute", display:"none"}} onClick={play}>Boop!</button>;
};
 
export default BoopButton;
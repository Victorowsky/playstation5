import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import IconButton from '@material-ui/core/IconButton';
// import Cookies from 'js-cookie'

const VolumeButton = ({isMuted, setIsMuted}) => {


  return (
    <div
      onClick={() => {
        setIsMuted((prev) => !prev);
      }}
      title='Wycisz powiadomienie'
    >
      <IconButton 
      style={{
          color: "white",
          // position: "fixed",
          // bottom: "-5%",
          // left: "92%",
          // transform: "translate(-50%,0%)",
        }}>
      {!isMuted ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
     
    </div>
  );
};

export default VolumeButton;

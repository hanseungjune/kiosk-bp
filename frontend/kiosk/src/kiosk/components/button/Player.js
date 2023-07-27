import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import useAudioCall from "../../hooks/useAudioCall";

const Player = ({ url }) => {
  const [id, navigate, location, playing, toggle] = useAudioCall(url);

  return (
    <>
      <VolumeUpIcon fontSize="large" onClick={toggle} />
      <span>{playing ? "Pause" : "Play"}</span>
    </>
  );
};

export default Player;

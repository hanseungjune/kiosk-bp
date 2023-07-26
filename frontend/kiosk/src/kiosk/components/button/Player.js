import useAudio from "../../hooks/useAudio";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Player = ({ url, location }) => {
  const [playing, toggle] = useAudio(url, location);

  return (
    <>
      <VolumeUpIcon fontSize="large" onClick={toggle} />
      <span>{playing ? "Pause" : "Play"}</span>
    </>
  );
};

export default Player;

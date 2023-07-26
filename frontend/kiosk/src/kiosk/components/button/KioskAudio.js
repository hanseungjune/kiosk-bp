import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { AudioPlayStyle } from "../KioskRentCompleteSection";
import { useEffect } from "react";

const KioskAudio = ({ audio, audioPlay }) => {
  useEffect(() => {
    audio.volume = 1;
    try {
      audio.play();
    } catch (error) {
      console.error("Failed to play the audio:", error);
    }
    return () => {
      audio.pause();
    };
  }, [audio.volume]);

  return (
    <div css={AudioPlayStyle} id="audioplay" onClick={audioPlay}>
      <VolumeUpIcon fontSize="large" />
    </div>
  );
};

export default KioskAudio;

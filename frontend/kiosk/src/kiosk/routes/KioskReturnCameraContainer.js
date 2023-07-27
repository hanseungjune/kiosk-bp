/** @jsxImportSource @emotion/react */
import { useLocation } from "react-router-dom";
import KioskCameraHeader from "../components/KioskCameraHeader";
import KioskReturnCameraSection from "../components/KioskReturnCameraSection";
import audioFile from "../assets/KioskReturnCameraContainerAudio.mp3";
import Player from "../components/button/Player";
import useAudioCall from "../hooks/useAudioCall";
import { AudioPlayStyle, componentStyles } from "../style/rentStyle";
import { KioskReturnCameraStyle, header, section } from "../style/returnStyle";

const KioskReturnCameraContainer = () => {
  const location = useLocation();
  const { stop } = useAudioCall(audioFile);

  return (
    <div css={componentStyles}>
      <div css={KioskReturnCameraStyle}>
        <div css={header}>
          <KioskCameraHeader />
        </div>
        <div css={section}>
          <KioskReturnCameraSection audioFile={audioFile}/>
        </div>
        <div css={AudioPlayStyle}>
          <Player url={audioFile} />
        </div>
      </div>
    </div>
  );
};

export default KioskReturnCameraContainer;

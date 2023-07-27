/** @jsxImportSource @emotion/react */
import {
  AudioPlayStyle,
  KioskRentCompleteSectionStyle,
} from "../../style/style";
import Player from "./Player";
import audioFile from "../../assets/KioskRentCompleteContainerAudio.mp3";

const KioskRentSuccess = () => {
  return (
    <>
      <div css={KioskRentCompleteSectionStyle}>
        <span>감사합니다.</span>
        <span className="KioskRentSectionCompleteGuide">
          오늘도 좋은하루 되세요
        </span>
      </div>
      <div css={AudioPlayStyle}>
        <Player url={audioFile} />
      </div>
    </>
  );
};

export default KioskRentSuccess;

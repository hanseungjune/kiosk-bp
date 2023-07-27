/** @jsxImportSource @emotion/react */
import {
  AudioPlayStyle,
  KioskRentCompleteSectionStyle,
} from "../../style/style";
import Player from "./Player";
import NoRentaudioFile from "../../assets/KioskNoRentAudio.mp3";

const KioskRentFailure = () => {
  return (
    <>
      <div css={KioskRentCompleteSectionStyle}>
        <span>우산을 가져가지 않았습니다.</span>
        <span className="KioskRentSectionCompleteGuide">
          환불내역을 확인해주세요
        </span>
      </div>
      <div css={AudioPlayStyle}>
        <Player url={NoRentaudioFile} />
      </div>
    </>
  );
};

export default KioskRentFailure;

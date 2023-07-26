/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import audioFile from "../assets/KioskRentCompleteContainerAudio.mp3";
import NoRentaudioFile from "../assets/KioskNoRentAudio.mp3";
import {
  AudioPlayStyle,
  KioskRentCompleteSectionStyle,
  KioskRentSectionCompleteStyle,
} from "../style/style";
import Player from "./button/Player";

const KioskRentCompleteSection = () => {
  const { isBrolly, id } = useParams();
  const [isRent, setIsRent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const brollyAsNumber = Number(isBrolly);
    if (brollyAsNumber === 1) {
      setIsRent(true);
    } else if (brollyAsNumber === 0) {
      setIsRent(false);
    }
    const timer = setTimeout(() => {
      navigate(`/kiosk/${id}`);
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, [id, navigate, isBrolly]);

  return (
    <div css={KioskRentSectionCompleteStyle}>
      <div className="KioskRentSectionCompleteHolderBtn">
        {isRent && (
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
        )}
        {!isRent && (
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
        )}
      </div>
    </div>
  );
};

export default KioskRentCompleteSection;

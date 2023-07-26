/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KioskHeader from "../components/KioskHeader";
import KioskRentGuideSection from "../components/KioskRentGuideSection";
import audioFile from "../assets/KioskRentGuideContainerAudio.mp3";
import Player from "../components/button/Player";
import { useLocation } from "react-router";
import {
  AudioPlayStyle,
  KioskRentStyle,
  componentStyles,
} from "../style/style";

const KioskRentCompleteContainer = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`);
    }, 30000);
    return () => {
      clearTimeout(myTimer);
    };
  }, [id, navigate]);

  return (
    <div css={componentStyles}>
      <div css={KioskRentStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskRentGuideSection />
        </section>
        <div css={AudioPlayStyle}>
          <Player url={audioFile} />
        </div>
      </div>
    </div>
  );
};

export default KioskRentCompleteContainer;

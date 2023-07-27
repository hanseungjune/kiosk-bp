/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import KioskHeader from "../components/KioskHeader";
import KioskReturnSection from "../components/KioskReturnSection";
import audioFile from "../assets/KioskReturnContainerAudio.mp3";
import { componentStyles } from "../style/rentStyle";
import { KioskReturnStyle } from "../style/returnStyle";

const KioskReturnContainer = () => {
  return (
    <div css={componentStyles}>
      <div css={KioskReturnStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskReturnSection />
        </section>
      </div>
    </div>
  );
};

export default KioskReturnContainer;

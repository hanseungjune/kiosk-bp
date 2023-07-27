/** @jsxImportSource @emotion/react */
import KioskHeader from "../components/KioskHeader";
import KioskRentSection from "../components/KioskRentSection";
import Player from "../components/button/Player";
import audioFile from "../assets/KioskRentContainerAudio.mp3";
import { AudioPlayStyle, KioskRentStyle, fadeInStyles } from "../style/style";

const KioskRentContainer = () => {
  return (
    <div css={fadeInStyles}>
      <div css={KioskRentStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskRentSection />
        </section>
        <div css={AudioPlayStyle}>
          <Player url={audioFile} />
          {/* 오디오 파일과 현재 위치를 Player 컴포넌트에 전달합니다. */}
        </div>
      </div>
    </div>
  );
};

export default KioskRentContainer;

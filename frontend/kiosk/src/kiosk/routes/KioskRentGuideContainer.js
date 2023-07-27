/** @jsxImportSource @emotion/react */
import KioskHeader from "../components/KioskHeader";
import KioskRentGuideSection from "../components/KioskRentGuideSection";
import { KioskRentStyle, componentStyles } from "../style/rentStyle";

const KioskRentCompleteContainer = () => {
  return (
    <div css={componentStyles}>
      <div css={KioskRentStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskRentGuideSection />
        </section>
      </div>
    </div>
  );
};

export default KioskRentCompleteContainer;

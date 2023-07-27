/** @jsxImportSource @emotion/react */
import KioskHeader from "../components/KioskHeader";
import KioskRentCompleteSection from "../components/KioskRentCompleteSection";
import { KioskRentStyle, componentStyles } from "../style/rentStyle";

const KioskRentCompleteContainer = () => {
  return (
    <div css={componentStyles}>
      <div css={KioskRentStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskRentCompleteSection />
        </section>
      </div>
    </div>
  );
};

export default KioskRentCompleteContainer;

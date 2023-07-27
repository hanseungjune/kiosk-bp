/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import KioskHeader from "../components/KioskHeader";
import KioskReturnCompleteSection from "../components/KioskReturnCompleteSection";
import { componentStyles } from "../style/rentStyle";
import { KioskReturnReceiptStyle } from "../style/returnStyle";

const KiosktReturnCompleteContainer = () => {
  return (
    <div css={componentStyles}>
      <div css={KioskReturnReceiptStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskReturnCompleteSection />
        </section>
      </div>
    </div>
  );
};

export default KiosktReturnCompleteContainer;

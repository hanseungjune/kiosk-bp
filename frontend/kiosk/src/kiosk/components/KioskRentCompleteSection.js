/** @jsxImportSource @emotion/react */
import { KioskRentSectionCompleteStyle } from "../style/rentStyle";
import { useParams } from "react-router-dom";
import KioskRentSuccess from "./button/KioskRentSuccess";
import KioskRentFailure from "./button/KioskRentFailure";

const KioskRentCompleteSection = () => {
  const { isBrolly } = useParams();
  return (
    <div css={KioskRentSectionCompleteStyle}>
      <div className="KioskRentSectionCompleteHolderBtn">
        {Number(isBrolly) === 1 && (
          <>
            <KioskRentSuccess />
          </>
        )}
        {Number(isBrolly) === 0 && (
          <>
            <KioskRentFailure />
          </>
        )}
      </div>
    </div>
  );
};

export default KioskRentCompleteSection;

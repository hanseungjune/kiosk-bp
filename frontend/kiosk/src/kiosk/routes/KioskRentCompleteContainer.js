/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KioskHeader from "../components/KioskHeader";
import KioskRentCompleteSection from "../components/KioskRentCompleteSection";
import { KioskRentStyle, componentStyles } from "../style/style";

const KioskRentCompleteContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`);
    }, 300000);
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
          <KioskRentCompleteSection />
        </section>
      </div>
    </div>
  );
};

export default KioskRentCompleteContainer;

/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { homeButtonDiv } from "../../style/rentStyle";

const KioskBranchLocation = ({ id, name }) => {
  const navigate = useNavigate();

  const serviceStart = () => {
    navigate(`/kiosk/${id}`);
  };

  return (
    <div css={homeButtonDiv}>
      <div onClick={serviceStart}>{name}</div>
    </div>
  );
};

export default KioskBranchLocation;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom/dist";

const KioskRentSectionGuideStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  bottom: -10px;

  height: 80vh;
  .KioskRentSectionCompleteGuide {
    font-size: 32px;
  }

  .KioskRentSectionGuideHolderBtn {
    width: 600px;
    height: 100px;
    background-color: #b1b2ff;
    border-radius: 45px;

    font-size: 2.2rem;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
    padding-top: 2.5vh;

    span {
      font-size: 1.2em;
    }
  }
  button {
    width: 450px;
    height: 50px;
  }
`;

// 위에는 Emotion.js 입니다.
// 밑에는 JS 입니다.

const KioskRentGuideSection = () => {
  const { holderNum, id } = useParams();
  const navigate = useNavigate();

  return (
    <div css={KioskRentSectionGuideStyle}>
      <div className="KioskRentSectionGuideHolderBtn">
        <span>{holderNum}번 홀더가 열렸습니다</span>
      </div>
      <span className="KioskRentSectionCompleteGuide">우산을 가져가주세요</span>
      <div>
        <button
          onClick={() => {
            navigate(`/kiosk/${id}/rent/complete/${holderNum}/${0}`);
          }}
        >
          2. 우산을 가져가지 않았을 때,
        </button>
        <button
          onClick={() => {
            navigate(`/kiosk/${id}/rent/complete/${holderNum}/${1}`);
          }}
        >
          2. 우산을 제대로 잘 가져갔을 때,
        </button>
      </div>
    </div>
  );
};

export default KioskRentGuideSection;

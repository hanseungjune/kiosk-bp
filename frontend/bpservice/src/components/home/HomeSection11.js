/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import kiosk from "../../style/kiosk.png";
import kiosk3 from "../../style/kiosk3.png";

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

const phoneStyle = css`
  width: 70vw;
  height: 24vh;
  position: relative;
`;

const phone1Style = css`
  position: absolute;
  width: 60vw;
  height: 16.3vh;
  margin-bottom: 4vh;
  border-radius: 8px;
`;

const fontStyle = css`
  position: absolute;
  color: white;
  text-align: center;
  top: 60%;
  font-size: 2rem;
  font-weight: 900;
`;

function HomeSection9() {
  return (
    <div>
      <div css={container}>
        <img src={kiosk} alt="phone" css={phoneStyle} />
        <img src={kiosk3} alt="phone1" css={phone1Style} />
        <span css={fontStyle}>대여 및 결제완료</span>
      </div>
    </div>
  );
}

export default HomeSection9;

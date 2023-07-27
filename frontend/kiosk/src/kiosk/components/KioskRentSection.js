/** @jsxImportSource @emotion/react */
import KioskPaymentQR from "./QR/KioskPaymentQR";
import BPlogoImage from "../assets/BPlogoImage.png";
import {
  BPlogoImageSize,
  KioskRentMethod,
  KioskRentMethodTitle,
  KioskRentQR,
  KioskRentSectionStyle,
  QR,
} from "../style/rentStyle";

const KioskRentSection = () => {
  return (
    <div css={KioskRentSectionStyle}>
      <div css={KioskRentQR}>
        <div css={QR}>
          <KioskPaymentQR />
        </div>
      </div>
      <div css={KioskRentMethod}>
        <div css={KioskRentMethodTitle}>
          <img css={BPlogoImageSize} src={BPlogoImage} alt="BPlogoImage" />
          <span>대여 방법</span>
        </div>
        <ul>
          <li>스마트폰 카메라로 QR 코드를 인식해주세요.</li>
          <li>로그인 및 회원가입으로 결제를 진행해주세요.</li>
          <li>결제 후, 홀더가 열리는지 확인해주세요.</li>
          <li>홀더 번호를 확인한 뒤 우산을 가져가주세요.</li>
          <li>홀더는 30초 뒤에 자동으로 닫힙니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default KioskRentSection;

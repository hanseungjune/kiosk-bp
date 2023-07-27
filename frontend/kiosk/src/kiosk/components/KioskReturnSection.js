/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { Link, useNavigate, useParams } from "react-router-dom";
import PictureImg from "../assets/PictureImg.png";
import { useDispatch, useSelector } from "react-redux";
import {
  KioskReturnMethod,
  KioskReturnMethodTitle,
  KioskReturnQR,
  KioskReturnQRCheckSection,
  KioskReturnSectionStyle,
  PictureImgSize,
  QR,
  QRBox,
  QRLine,
} from "../style/returnStyle";
import { setQRCode } from "../redux/actions/qrdataAction";

const KioskReturnSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.qrCode.data);

  console.log(data);

  useEffect(() => {
    if (data !== "") {
      navigate(`/kiosk/${id}/return/camera`);
    }
  }, [data]);

  return (
    <div css={KioskReturnSectionStyle}>
      <div css={KioskReturnQR}>
        <div css={QR}>
          <div css={KioskReturnQRCheckSection}>
            <div css={QRBox}></div>
            {/* <div css={QRBlackBox}></div> */}
            <div css={QRLine} />
            <QrReader
              onResult={(result, error) => {
                if (result) {
                  console.log(result)
                  // dispatch(setQRCode(result?.text));
                }
              }}
            />
          </div>
        </div>
      </div>
      <div css={KioskReturnMethod}>
        <div css={KioskReturnMethodTitle}>
          <img css={PictureImgSize} src={PictureImg} alt="PictureImg" />
          <Link to={`/kiosk/${id}/return/camera`}>
            <span>반납 방법</span>
          </Link>
        </div>
        <ul>
          <li>우산의 QR을 현재화면에 체크해주세요.</li>
          <li>우산을 꼭 펴서 카메라를 찍어주세요.</li>
          <li>정확하게 찍혔는지 확인버튼을 눌러주세요.</li>
          <li>우산 케이스가 열리면 우산을 넣어주세요.</li>
          <li>보증금이 환급되었는지 확인해주세요.</li>
        </ul>
      </div>
    </div>
  );
};

export default KioskReturnSection;

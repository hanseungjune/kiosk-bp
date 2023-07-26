import { QRCodeSVG } from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom/dist";
import { setPlaying } from "../../redux/actions/audioActions";

const KioskPaymentQR = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  let holderNum = 1;

  const audio = useSelector((state) => state.audio.audio);
  const dispatch = useDispatch();

  const ScanSuccess = async () => {
    let isPause = false;
    if (audio && typeof audio.pause === "function") {
      audio.pause();
      dispatch(setPlaying(false));
      isPause = true;
    }
    if (isPause) {
      navigate(`/kiosk/${id}/rent/guide/${holderNum}`);
    }
  };

  return (
    <div>
      <QRCodeSVG
        value={`/kiosk/${id}/rent/guide/${holderNum}`}
        size={400}
        imageSettings={{
          src: `/kiosk/${id}/rent/guide/${holderNum}`,
          width: 10,
          height: 10,
        }}
        id="qr-gen"
        level={"H"}
        includeMargin={true}
        bgColor={"white"}
        fgColor={"#404040"}
      />
      <div>
        <button onClick={ScanSuccess}>1. 정상적으로 스캔하게 되면,</button>
      </div>
    </div>
  );
};

export default KioskPaymentQR;

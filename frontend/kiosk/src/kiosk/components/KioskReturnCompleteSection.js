/** @jsxImportSource @emotion/react */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

// 오디오
import audioFile from "../assets/KioskReturnCompleteContainerAudio.mp3";
import NoReturnAudioFile from "../assets/KioskNoReturnAudio.mp3";
import {
  KioskNoReturnStyle,
  KioskReceiptMent,
  KioskReturnReceipt,
  KioskReturnReceiptStyles,
  KioskReturnReceiptView,
} from "../style/returnStyle";
import { AudioPlayReturnStyle, AudioPlayStyle } from "../style/rentStyle";
import Player from "./button/Player";

const KioskReturnCompleteSection = () => {
  const { isBrolly } = useParams();
  const navigate = useNavigate();
  const [isReturn, setIsReturn] = useState(false);
  const [kioskInfo, setKioskInfo] = useState({
    kioskName: "",
    refundMoney: "",
    depositeMoney: "",
    period: "",
    price: "1000",
    refundMoney: "95000",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const depositeMoney = Number(queryParams.get("depositeMoney")).toLocaleString(
    "ko-KR"
  );
  const period = Number(queryParams.get("period")).toLocaleString("ko-KR");
  const price = Number(queryParams.get("price")).toLocaleString("ko-KR");
  const refundMoney = Number(queryParams.get("refundMoney")).toLocaleString(
    "ko-KR"
  );

  useEffect(() => {
    if (isBrolly == 1) {
      setIsReturn(true);
    }
  }, [isReturn]);

  const getReturnInfo = async () => {
    const API_URL = process.env.REACT_APP_API_MAIN_KEY;
    const response = await axios({
      method: "GET",
      url: `${API_URL}/kiosk/home/kiosk-name`,
    });

    if (response.status === 200) {
      setKioskInfo(response.data);
    }
  };
  getReturnInfo();

  return (
    <div css={KioskReturnReceiptStyles}>
      {isReturn ? (
        <div>
          <div css={KioskReceiptMent}>
            <p>우산이 정상적으로 반납되었습니다</p>
            <span>보증금 정산내역을 확인해주세요</span>
          </div>
          <div css={KioskReturnReceiptView}>
            <h1>요금 사항</h1>
            <div css={KioskReturnReceipt}>
              <div className="ReceiptTitle">
                <p className="BranchName">{kioskInfo.kioskName}</p>
              </div>
              <div className="ReceiptTotal">
                <p className="Payment">
                  {kioskInfo.refundMoney}
                  <span>원</span>
                </p>
              </div>
              <div className="ReceiptDetailView">
                <div className="FirstHorizon"></div>
                <div className="ReceiptDetail">
                  <span className="FontColorGray">보증금</span>
                  <span>{kioskInfo.depositeMoney}원</span>
                </div>
                <div className="ReceiptDetail">
                  <span className="FontColorGray">이용 기간</span>
                  <span>{kioskInfo.period}일</span>
                </div>
                <div className="ReceiptDetail">
                  <span className="FontColorGray">이용 금액</span>
                  <span>{kioskInfo.price}원</span>
                </div>
                <div className="SecondHorizon"></div>
                <div className="ReceiptDetailRefunds">
                  <span>환급 금액</span>
                  <span>{kioskInfo.refundMoney}원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div css={KioskNoReturnStyle}>
            <div className="KioskNoReturnGuideHolderBtn">
              <p>우산이 반납되지 않았습니다</p>
            </div>
            <span className="KioskNoReturnGuide">반납을 다시 진행해주세요</span>
          </div>
        </div>
      )}
      {/* 오디오 */}
      {isReturn ? (
        <div css={AudioPlayReturnStyle}>
          <Player url={audioFile} />
        </div>
      ) : (
        <div css={AudioPlayReturnStyle}>
          <Player url={NoReturnAudioFile} />
        </div>
      )}
      {/* 오디오 */}
    </div>
  );
};

export default KioskReturnCompleteSection;

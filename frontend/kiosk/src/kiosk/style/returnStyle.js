import { css, keyframes } from "@emotion/react";
import ReceiptImg from "../assets/ReceiptWhite.png";

export const KioskReturnSectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const KioskReturnQR = css`
  position: absolute;
  left: 30px;

  width: 50vw;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QR = css`
  width: 500px;
  height: 450px;
  position: relative;
`;

export const KioskReturnQRCheckSection = css`
  section {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 470px;
  }
  section > div {
    width: 70vw;
  }
  .KioskReturnQRScreen {
    width: 100vw;
  }
`;

export const QRBox = css`
  border: 10px solid #b1b2ff;
  height: 370px;
  width: 489px;

  position: absolute;
  left: -10px;
  top: 30px;
  z-index: 100;
`;

export const scan = keyframes`
  0% {
    transform: translateY(0px);
  }
  30%{
    transform: translateY(80px);
  }
  40%{
    transform: translateY(280px);
  }
  50% {
    transform: translateY(360px);
  }
  60%{
    transform: translateY(280px);
  }
  70%{
    transform: translateY(80px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const QRLine = css`
  z-index: 99;
  position: absolute;
  top: 30px;
  left: -10px;
  right: 0;
  height: 4px;
  width: 489px;
  background-color: red;
  animation: ${scan} 5s linear infinite;
`;

export const blackBox = keyframes`
  0% {
    height: 0px;
  }
  30%{
    height: 80px;
  }
  40%{
    height: 280px;
  }
  50% {
    height: 360px;
  }
  60%{
    height: 280px;
  }
  70%{
    height: 80px;
  }
  100% {
    height: 0px;
  }
`;

export const QRBlackBox = css`
  border: 0px solid transparent;
  height: 0px;
  width: 489px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: -10px;
  top: 30px;
  z-index: 100;

  animation: ${blackBox} 5s linear infinite;

  filter: grayscale(100%);
`;

export const PictureImgSize = css`
  position: absolute;
  top: -5px;
  left: 0px;
  width: 60px;
`;

export const KioskReturnMethod = css`
  width: 52vw;
  height: 55vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  right: 0px;
  bottom: 17vh;

  ul {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0;
    margin-left: 10vw;
    line-height: 6vh;

    li {
      list-style-type: disc;
      font-size: 26px;
    }
  }
`;

export const KioskReturnMethodTitle = css`
  position: relative;
  left: 20px;
  top: 0px;
  width: 460px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: 80px;
  }
`;

export const KioskReturnStyle = css`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: #eef1ff;

  footer {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export const KioskReturnCameraStyle = css`
  box-sizing: border-box;
  border: 1px solid black;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const header = css`
  width: 100vw;
  height: 10vh !important;
  z-index: 6;

  position: fixed;
  top: 0px;
`;

export const section = css`
  height: 90vh !important;
`;

export const KioskCameraCheckDiv = css`
  width: 1024px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const videoSize = css`
  width: 100vw !important;
  height: 100vh;

  position: absolute;
  top: 0%;
`;

export const canvasDiv = css`
  width: 730px !important;
  max-width: 1200px;

  position: relative;
  top: 10vh;

  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);

  & > canvas {
    position: absolute;
    top: -200px;
    right: -145px;
  }
`;

export const canvasSize = css`
  width: 100vw;
  height: 130vh;
  position: absolute;
  top: -61px;
  right: 0px;
`;

export const countDownDivStyle = ({ isActive }) => css`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: -60px;
  right: -145px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${isActive ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.00)"};
  transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: 1s;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg);
    -moz-transform:rotateY(180deg);
  }
  to {
    opacity: 1;
    transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg);
    -moz-transform:rotateY(180deg);
  }
`;

export const grow = keyframes`
  from {
    transform: rotateY(200deg) scale(0);
    -webkit-transform:rotateY(200deg) scale(0);
    -moz-transform:rotateY(200deg) scale(0);
  }
  to {
    transform: rotateY(200deg) scale(1.5);
    -webkit-transform:rotateY(200deg) scale(1.5);
    -moz-transform:rotateY(200deg) scale(1.5);
  }
`;

export const countDownStyle = ({ isActive }) => css`
  display: ${isActive ? "block !important" : "none !important"};
  position: absolute;
  top: 52vh;
  font-size: 15vw;
  color: ${isActive ? "white !important" : "black !important"};
  animation: ${fadeIn} 1s ease forwards, ${grow} 1s ease forwards;
  animation-iteration-count: infinite;
  animation-play-state: ${isActive ? "running" : "paused"};

  z-index: 999 !important;

  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
`;

export const buttonCenter = css`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const buttonDiv = css`
  width: 80vw;
  height: 20vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  top: 68vh;

  button {
    width: 30vw;
    height: 15vh;

    background-color: #b1b2ff;
    font-size: 2.5em;
    padding-top: 0.3em;

    border-radius: 20px;
    border: 1px solid transparent;
  }

  .takeAPictureBtn {
    position: absolute;
    left: 50% !important;
    bottom: 50% !important;
    transform: translate(-50%, 50%);
  }
`;

export const SpinnerDiv = css`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  width: "40vw";
  height: "20vh";
  background-color: "white";
`;

export const KioskReturnReceiptStyles = css`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  background-color: #eef1ff;
`;

export const KioskReturnReceiptStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #eef1ff;

  width: 100vw;
  height: 100vh;
`;

export const KioskReceiptMent = css`
  width: 50vw;
  height: 70vh;

  position: absolute;
  bottom: 5%;
  left: 4%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.7em;
    padding-top: 3vh;
    padding-left: 4.2vw;
    margin: 0;
    margin-bottom: 3vh;
    background-color: #b1b2ff;
    border-radius: 40px;
    width: 45vw;
    height: 10vh;
  }

  span {
    font-size: 1.5em;
  }
`;

export const KioskReturnReceiptView = css`
  position: absolute;
  bottom: 0%;
  right: 5%;

  width: 45vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  ol {
    margin-left: 2.5vw;
    li {
      font-size: 20px;
    }
  }
`;

export const KioskReturnReceipt = css`
  width: 38vw;
  height: 100%;

  background: url(${ReceiptImg}) no-repeat center;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .ReceiptTitle,
  .ReceiptTotal {
    padding-left: 10%;
  }

  .BranchName {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 0px;
    /* border-bottom: 3px solid #404040; */
  }

  .Payment {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 3%;
    border-bottom: 3px dashed #404040;
    span {
      font-weight: bold;
      font-size: 1.95rem;
    }
  }

  .ReceiptDetailView {
    width: 100%;

    display: flex;
    flex-direction: column;

    padding-left: 10%;

    .FirstHorizon {
      width: 100%;
      height: 10%;
    }

    .SecondHorizon {
      margin-top: 3%;
      border-top: 3px dashed #404040;
      margin-bottom: 5%;

      width: 100%;
      height: 3vh;
    }

    .ReceiptDetail {
      width: 95%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 1.25em;
      }
    }

    .ReceiptDetailRefunds {
      width: 95%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        display: block;
        font-size: 2em;
        font-weight: bold;
      }
    }
  }
`;

/////////////////////////////////// 반납안되었을때 /////////////////////////////////

export const KioskNoReturnStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  left: 40%;

  height: 80vh;
  .KioskNoReturnGuide {
    font-size: 32px;
  }

  .KioskNoReturnGuideHolderBtn {
    width: 600px;
    height: 100px;
    background-color: #b1b2ff;
    border-radius: 45px;

    font-size: 2.2rem;
    padding-top: 2.5vh;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    p {
      font-size: 1em;
    }
  }
  button {
    width: 450px;
    height: 50px;
  }
`;

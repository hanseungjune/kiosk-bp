import { css, keyframes } from "@emotion/react";

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

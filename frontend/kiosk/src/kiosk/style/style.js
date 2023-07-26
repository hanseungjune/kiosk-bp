import { css, keyframes } from "@emotion/react";

export const AudioPlayStyle = css`
  width: 4rem;
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #b1b2ff;

  position: absolute;
  bottom: 1rem;
  right: 1rem;

  border-radius: 50%;

  & > span {
    font-size: 1rem;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInStyles = css`
  animation: ${fadeIn} 1s ease-in;
`;

export const HomeDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const HomeSemiDiv = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  column-gap: 10px;
  row-gap: 10px;
  width: 90vw;
  height: 90%;
`;

export const homeButtonDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  border: 1px solid purple;
  background-color: white;
  margin-right: 5%;

  & > div {
    color: purple !important;
    font-size: 21px;
    font-weight: 900;
  }
`;

export const componentStyles = css`
  animation: ${fadeIn} 1s ease-in;
`;

export const KioskRentStyle = css`
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

export const KioskHeaderStyle = css`
  background-color: #eef1ff;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100vw;
  height: 15vh;
`;

export const KioskLogo = css`
  margin-left: 3vw;
  margin-top: 2vw;

  img {
    width: 10vw;
  }
`;

export const KioskLocation = css`
  margin-right: 3vw;
  margin-top: 3vw;
`;

export const KioskRentSectionCompleteStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  bottom: -20px;

  height: 80vh;
  .KioskRentSectionCompleteGuide {
    font-size: 32px;
  }

  .KioskRentSectionCompleteHolderBtn {
    width: 650px;
    height: 100px;
    background-color: #b1b2ff;
    border-radius: 45px;

    font-size: 2.2rem;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
    padding-top: 2.5vh;
  }

  & span {
    font-size: 1.2em;
  }

  button {
    width: 450px;
    height: 50px;
  }
`;

export const KioskRentCompleteSectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :nth-child(1) {
    font-size: 2.4rem;
  }

  & > :nth-child(2) {
    font-size: 1.4rem;
  }
`;

export const KioskRentSectionStyle = css`
  width: 100vw;
  position: relative;
  left: 2.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 85vh;
`
export const KioskRentQR = css`
  position:absolute;
  left: 2vw;
  bottom: 10vh;

  margin-left: 3vw;

  width: 35vw;
  height: 60vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const QR = css`
  width: 400px;
  height: 400px;
  
  svg > path:first-of-type {
    fill: #EEF1FF;
  }
`

export const KioskRentMethod = css`
  width: 64vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  right: 0vw;
  bottom: 10vh;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width: 50vw;
    line-height: 7vh;
    margin: 0;
    margin-left: 5vw;

    li {
      font-size: 1.65rem;
    }
  } 
`

export const KioskRentMethodTitle = css`
  position: relative;
  left: 10px;
  top: 10px;
  width: 500px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  span{
    font-size: 80px;
  }
`

export const BPlogoImageSize = css`
  position: absolute;
  top: -5px;
  left: 0px;
  width: 80px;
`
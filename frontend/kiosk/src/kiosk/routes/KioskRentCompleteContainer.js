/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import KioskHeader from '../components/KioskHeader'
import KioskRentCompleteSection from '../components/KioskRentCompleteSection'
import audioFile from '../assets/KioskRentCompleteContainerAudio.mp3'
import NoRentaudioFile from '../assets/KioskNoRentAudio.mp3'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const componentStyles = css`
  animation: ${fadeIn} 1s ease-in;
`;

const KioskRentStyle = css`
  box-sizing: border-box;
  width : 100vw;
  height : 100vh;
  background-color: #EEF1FF;

  footer {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`

// 위에는 Emotion.js 입니다.
// 밑에는 JS 입니다.

const KioskRentCompleteContainer = () => {
  const { id } = useParams();
  const { isBrolly } = useParams();
  const navigate = useNavigate();

  // 오디오
  const [isPlaying, setIsPlaying] = useState(true);
  const [audio, setAudio] = useState(new Audio(audioFile));
  const [Noaudio, setNoAudio] = useState(new Audio(NoRentaudioFile));

  useEffect(() => {
    if (isBrolly == 1) {
      audio.volume = 1
      audio.play();
    }
    else if(isBrolly == 0) {
      Noaudio.volume = 1
      Noaudio.play();
    }
  return () => {
    if (isBrolly == 1) {
      audio.pause();
    }
    else if(isBrolly == 0) {
      Noaudio.pause();
    }
  };
  }, []);
  // 오디오

  // 홈화면으로
  const miliUnit = 1000
  const seconds = 300 * miliUnit
  useEffect(() => {
    const myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`)
    }, seconds)
    return () => {
      clearTimeout(myTimer)
    }
  }, [miliUnit, seconds, id, navigate])

  return (
    <div css={componentStyles}>
      <div css={KioskRentStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskRentCompleteSection />
        </section>
      </div>
      <div id='RentCompleteAudioSuccess'></div>
      <div id='RentCompleteAudioFail'></div>
    </div>
  )
}

export default KioskRentCompleteContainer;
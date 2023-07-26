/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import KioskHeader from "../components/KioskHeader";
import KioskRentSection from "../components/KioskRentSection";
import Player from "../components/button/Player";
import audioFile from "../assets/KioskRentContainerAudio.mp3";
import { AudioPlayStyle, KioskRentStyle, fadeInStyles } from "../style/style";
import { setPlaying } from "../redux/actions/audioActions";
import { useDispatch, useSelector } from "react-redux";

const KioskRentContainer = () => {
  const { id } = useParams(); // URL 파라미터를 가져옵니다. (키오스크의 ID)
  const navigate = useNavigate(); // 페이지를 이동시키기 위한 함수입니다.
  const location = useLocation(); // 현재 페이지 위치를 가져옵니다.
  const dispatch = useDispatch(); // Redux 액션을 dispatch하기 위한 함수입니다.
  const audio = useSelector((state) => state.audio.audio); // Redux state에서 audio 객체를 가져옵니다.

  useEffect(() => {
    let audioMessage = "";
    // 페이지가 로드되었을 때 오디오를 재생하는 부분
    if (audio) {
      audio.currentTime = 0; // 오디오 재생 위치를 초기화합니다.
      dispatch(setPlaying(true)); // 오디오 재생 상태를 true로 설정합니다.
      audio.play().catch((error) => (audioMessage = error)); // 오디오를 재생하며, 재생에 실패한 경우 오류 메시지를 저장합니다.
    }
  }, [audio, dispatch]); // 오디오 객체나 dispatch 함수가 변경되면 이 useEffect 함수를 다시 실행합니다.

  // 다른 페이지로 전환할 때, 오디오 꺼짐
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause(); // 오디오를 정지합니다.
        audio.currentTime = 0; // 오디오 재생 위치를 초기화합니다.
        dispatch(setPlaying(false)); // 오디오 재생 상태를 false로 설정합니다.
      }
    };
  }, [location.pathname, audio, dispatch]); // 페이지 위치, 오디오 객체, dispatch 함수가 변경되면 이 useEffect 함수를 다시 실행합니다.

  useEffect(() => {
    let myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`); // 5분 후에 해당 키오스크의 페이지로 이동합니다.
    }, 300000);
    return () => {
      clearTimeout(myTimer); // 컴포넌트가 언마운트될 때 타이머를 제거합니다.
    };
  }, [id, navigate]); // 키오스크 ID나 navigate 함수가 변경되면 이 useEffect 함수를 다시 실행합니다.

  return (
    <div css={fadeInStyles}>
      <div css={KioskRentStyle}>
        <header>
          <KioskHeader />
        </header>
        <section>
          <KioskRentSection />
        </section>
        <div css={AudioPlayStyle}>
          <Player url={audioFile} location={location} />
          {/* 오디오 파일과 현재 위치를 Player 컴포넌트에 전달합니다. */}
        </div>
      </div>
    </div>
  );
};

export default KioskRentContainer;

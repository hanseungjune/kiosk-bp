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
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const audio = useSelector((state) => state.audio.audio);

  useEffect(() => {
    let audioMessage = "";
    // 페이지가 로드되었을 때 오디오를 재생하는 부분
    if (audio) {
      audio.currentTime = 0;
      dispatch(setPlaying(true));
      audio.play().catch((error) => (audioMessage = error));
    }
  }, [audio, dispatch]);

  // 다른 페이지로 전환할 때, 오디오 꺼짐
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        dispatch(setPlaying(false));
      }
    };
  }, [location.pathname, audio, dispatch]);

  useEffect(() => {
    let myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`);
    }, 300000);
    return () => {
      clearTimeout(myTimer);
    };
  }, [id, navigate]);

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
        </div>
      </div>
    </div>
  );
};

export default KioskRentContainer;

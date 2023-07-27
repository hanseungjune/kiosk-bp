import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudio, setPlaying } from "../redux/actions/audioActions";

const useAudio = (url) => {
  const audio = useSelector((state) => state.audio.audio); // Redux state에서 audio 객체를 가져옵니다.
  const playing = useSelector((state) => state.audio.playing); // Redux state에서 audio 재생 상태를 가져옵니다.
  const dispatch = useDispatch(); // Redux 액션을 dispatch하기 위한 함수입니다.

  const toggle = () => dispatch(setPlaying(!playing)); // 재생 상태를 변경하는 함수입니다.

  const stop = () => {
    // 오디오를 중지하고 초기화하는 함수입니다.
    if (audio) {
      audio.pause(); // 오디오를 일시 중지합니다.
      audio.currentTime = 0; // 오디오 재생 위치를 초기화합니다.
      dispatch(setPlaying(false)); // 재생 상태를 false로 변경합니다.
    }
  };

  useEffect(() => {
    // 재생 상태나 audio 객체가 변경될 때마다 실행됩니다.
    if (playing && audio) {
      audio.currentTime = 0; // 오디오 재생 위치를 초기화합니다.
      audio.play(); // 오디오를 재생합니다.
    } else if (!playing && audio) {
      audio.pause(); // 오디오를 일시 정지합니다.
    }
  }, [playing, audio]);

  useEffect(() => {
    // audio 객체가 변경될 때마다 실행됩니다.
    if (audio) {
      // 오디오가 끝나면 재생 상태를 false로 변경합니다.
      audio.addEventListener("ended", () => dispatch(setPlaying(false)));
      return () => {
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        audio.removeEventListener("ended", () => dispatch(setPlaying(false)));
      };
    }
  }, [audio, dispatch]);

  useEffect(() => {
    // url이나 dispatch 함수가 변경될 때마다 실행됩니다.
    const newAudio = new Audio(url); // 새로운 Audio 객체를 생성합니다.
    dispatch(setAudio(newAudio)); // Redux state에 새로운 Audio 객체를 저장합니다.
    dispatch(setPlaying(false)); // 재생 상태를 false로 변경합니다.
  }, [url, dispatch]);

  return [playing, toggle, stop]; // 재생 상태와 재생 상태를 변경하는 함수를 반환합니다.
};

export default useAudio;

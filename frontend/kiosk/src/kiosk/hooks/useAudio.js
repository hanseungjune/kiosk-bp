import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudio, setPlaying } from "../redux/actions/audioActions";

const useAudio = (url) => {
  const audio = useSelector((state) => state.audio.audio);
  const playing = useSelector((state) => state.audio.playing);
  const dispatch = useDispatch();

  const toggle = () => dispatch(setPlaying(!playing));

  const stop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      dispatch(setPlaying(false));
    }
  };

  useEffect(() => {
    if (playing && audio) {
      audio.currentTime = 0;
      audio.play();
    } else if (!playing && audio) {
      audio.pause();
      dispatch(setPlaying(false));
    }
  }, [playing, audio]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => dispatch(setPlaying(false)));
      return () => {
        audio.removeEventListener("ended", () => dispatch(setPlaying(false)));
      };
    }
  }, [audio, dispatch]);

  useEffect(() => {
    const newAudio = new Audio(url);
    dispatch(setAudio(newAudio));
    dispatch(setPlaying(false));
  }, [url, dispatch]);

  return [playing, toggle, stop];
};

export default useAudio;

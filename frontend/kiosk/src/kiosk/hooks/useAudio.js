import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudio, setPlaying } from "../redux/actions/audioActions";

const useAudio = (url, location) => {
  const audio = useSelector((state) => state.audio.audio);
  const playing = useSelector((state) => state.audio.playing);
  const dispatch = useDispatch();

  const toggle = () => dispatch(setPlaying(!playing));

  useEffect(() => {
    if (playing && audio) {
      audio.currentTime = 0;
      audio.play();
    } else if (!playing && audio) {
      audio.pause();
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

  return [playing, toggle];
};

export default useAudio;

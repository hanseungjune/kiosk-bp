import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAudio from "../hooks/useAudio";

const useAudioCall = (url) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [playing, toggle, stop] = useAudio(url);

  useEffect(() => {
    let myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`);
    }, 500000);
    return () => {
      clearTimeout(myTimer);
    };
  }, [id, navigate]);

  return [id, navigate, location, playing, toggle, stop];
};

export default useAudioCall;

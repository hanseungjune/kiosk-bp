import { useEffect } from "react";

const useCountdown = (timeLeft, takePicture, setTimeLeft, setIsActive) => {
  useEffect(() => {
    let timer;

    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      clearTimeout(timer);
      takePicture();
      setIsActive(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, takePicture, setTimeLeft, setIsActive]);
};

export default useCountdown;

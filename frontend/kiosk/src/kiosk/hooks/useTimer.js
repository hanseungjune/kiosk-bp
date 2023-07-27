import { useState } from "react";
import useInterval from "./useInterval";

const useTimer = (initialTimeLeft) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isActive, setIsActive] = useState(false);

  useInterval(
    () => {
      if (timeLeft <= 1) {
        setTimeLeft("");
        setIsActive(false);
        return;
      }
      setTimeLeft((timeLeft) => timeLeft - 1);
    },
    isActive ? 1000 : null
  );

  return { timeLeft, setTimeLeft, isActive, setIsActive };
};

export default useTimer;

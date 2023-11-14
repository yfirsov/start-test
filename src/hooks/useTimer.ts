import { useEffect, useRef, useState } from 'react';

export const useTimer = (value: number, autostart = false) => {
  const [timerValue, setTimerValue] = useState(value);
  const [isRunning, setIsRunning] = useState(autostart);
  const intervalRef = useRef(0);

  const start = () => {
    if (isRunning) {
      return;
    }
    if (timerValue < 1) {
      setTimerValue(value);
    }
    setIsRunning(isRunning => !isRunning);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (timerValue < 1) {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        return;
      }

      if (isRunning) {
        setTimerValue(value => value - 1);
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timerValue, value]);

  return { timerValue, start, isRunning };
};

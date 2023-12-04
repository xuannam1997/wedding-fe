import { useEffect, useState } from "react";

const useCountDown = (date) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDown = () => {
    const now = new Date().getTime();

    const distance = new Date(date).getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTime({
      days,
      hours,
      minutes,
      seconds,
    });

    // If the count down is finished, write some text
    if (distance < 0) {
      setTime({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  useEffect(() => {
    countDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(countDown, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...time };
};

export default useCountDown;

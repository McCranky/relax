import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import "../App.scss";

interface Props {
  time: number;
  sfx?: string;
  onTimeRunsOut?: any;
}

const Timer = (props: Props) => {
  const [seconds, setSeconds] = useState(props.time);
  const beep = new UIfx(props.sfx || "http://127.0.0.1:8000/sfx/ding.mp3");

  const modifySeconds = (num: number) => {
    setSeconds(seconds + num);
  };

  useEffect(() => {
    let interval = {} as NodeJS.Timeout;
    let timeout = {} as NodeJS.Timeout;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      beep.play();
      clearInterval(interval);
      if (props.onTimeRunsOut) {
        timeout = setTimeout(() => {
          props.onTimeRunsOut();
        }, 1000);
      }
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [seconds]);

  return (
    <div className="timer">
      <button className="btn add" onClick={() => modifySeconds(5)}>
        + 5
      </button>
      <div className="time">{seconds}</div>
      <button className="btn sub" onClick={() => modifySeconds(-5)}>
        - 5
      </button>
    </div>
  );
};

export default Timer;

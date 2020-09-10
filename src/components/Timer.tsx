import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import "../App.scss";

interface Props {
  time: number;
  allowModifing: boolean;
  sfx?: string;
  onTimeRunsOut?: any;
}

const Timer = ({ allowModifing, onTimeRunsOut, ...props }: Props) => {
  const [seconds, setSeconds] = useState(props.time);
  const [bounce, setBounce] = useState(false);
  const beep = new UIfx(props.sfx || "http://127.0.0.1:8000/sfx/ding.mp3");

  const modifySeconds = (num: number) => {
    setBounce(true);
    setSeconds((sec) => (sec + num < 0 ? 0 : sec + num));
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
      if (onTimeRunsOut) {
        timeout = setTimeout(() => {
          onTimeRunsOut();
        }, 1000);
      }
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [seconds, beep, onTimeRunsOut]);

  return (
    <div className="timer">
      {true && (
        <button className="btn hvr-danger" onClick={() => modifySeconds(-5)}>
          - 5
        </button>
      )}
      <div
        className={bounce ? "time bounce" : "time"}
        onAnimationEnd={() => setBounce(false)}
      >
        {seconds}
      </div>
      {true && (
        <button className="btn hvr-success" onClick={() => modifySeconds(5)}>
          + 5
        </button>
      )}
    </div>
  );
};

export default Timer;

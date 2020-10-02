import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import { Wrapper, Text } from "./styles/Timer.styled";
import { Button, ButtonDanger, ButtonSuccess } from "./common/styles/Button.styled";
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
  const beep = new UIfx(props.sfx || process.env.REACT_APP_ASSETS + "/sfx/ding.mp3");

  const modifySeconds = (num: number) => {
    setBounce(true);
    setSeconds((sec) => (sec + num < 0 ? 0 : sec + num));
  };

  useEffect(() => {
    let interval = 0; // = {} as NodeJS.Timeout;
    let timeout = 0; //= {} as NodeJS.Timeout;
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
    <Wrapper>
      {true && <ButtonDanger onClick={() => modifySeconds(-5)}> - 5</ButtonDanger>}

      <Text bounce={bounce} onAnimationEnd={() => setBounce(false)}>
        {seconds}
      </Text>

      {true && <ButtonSuccess onClick={() => modifySeconds(5)}>+ 5</ButtonSuccess>}
      <Button onClick={onTimeRunsOut}>Skip</Button>
    </Wrapper>
  );
};

export default Timer;

import React, { useState } from "react";
import "./App.scss";
import Timer from "./components/Timer";
import { Exercise } from "./types";

function App() {
  const exercises: Exercise[] = [
    {
      name: "Squat Lunge",
      duration: 30,
    },
    {
      name: "Side Squats",
      repeats: 12,
      bothSided: true,
    },
    {
      name: "Bulgarian Split Squat",
      repeats: 12,
      bothSided: true,
    },
    {
      name: "Wall Sit",
      duration: 35,
    },
    {
      name: "Curtsy Lunges",
      repeats: 10,
      bothSided: true,
    },
    {
      name: "Close Squats",
      repeats: 15,
    },
    {
      name: "Lunges",
      repeats: 12,
      bothSided: true,
    },
  ];
  const [index, setIndex] = useState(0);
  const [isRoundRest, setIsRoundRest] = useState(false);
  const [isRest, setIsRest] = useState(false);

  const handleTimeRunsOut = () => {
    if (isRoundRest) setIsRoundRest(false);
    alert("Time runs out!");
    if (!isRest)
      if (index + 1 < exercises.length) {
        setIndex((index) => index + 1);
      } else {
        setIndex(0);
        setIsRoundRest(true);
      }
    setIsRest(!isRest);
  };

  const renderTimerAndDesc = () => {
    console.log(
      `${process.env.REACT_APP_ASSETS}exercises/${exercises[index].name}.mp4`
    );
    console.log(process.env);
    if (exercises[index].duration) {
      const duration = exercises[index].duration || 30;
      return (
        <React.Fragment>
          <Timer time={duration} onTimeRunsOut={handleTimeRunsOut} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>{exercises[index].repeats} reps </p>
          {exercises[index].bothSided && <p>each</p>}
          <button onClick={handleTimeRunsOut}>Complete</button>
        </React.Fragment>
      );
    }
  };

  return (
    <div className="app">
      <header className="App-header"></header>
      {!isRest && !isRoundRest && (
        <React.Fragment>
          <video
            autoPlay
            loop
            muted
            playsInline
            src={`${process.env.REACT_APP_ASSETS}exercises/${exercises[index].name}.mp4`}
          />
          {renderTimerAndDesc()}
        </React.Fragment>
      )}
      {isRest && !isRoundRest && (
        <Timer time={45} onTimeRunsOut={handleTimeRunsOut} />
      )}
      {isRoundRest && <Timer time={120} onTimeRunsOut={handleTimeRunsOut} />}
    </div>
  );
}

export default App;

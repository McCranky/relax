import React, { useState } from "react";
import Timer from "./Timer";

import { ExerciseDescription } from "../types";

import "../App.scss";

interface Props {
  exercise: ExerciseDescription;
  onComplete: any;
}

const ExerciseInstructions = ({ exercise, onComplete, ...props }: Props) => {
  const [completed, setCompleted] = useState(false);

  let exerciseInstructions;
  if (exercise.rest === -1) {
    exerciseInstructions = <h1>Chill</h1>;
  } else if (exercise.duration) {
    if (!completed) {
      exerciseInstructions = (
        <Timer
          allowModifing={false}
          time={exercise.bothSided ? exercise.duration * 2 : exercise.duration}
          onTimeRunsOut={() => setCompleted(true)}
        />
      );
    } else {
      exerciseInstructions = (
        <button className="btn hvr-info space" onClick={onComplete}>
          Complete
        </button>
      );
    }
  } else {
    exerciseInstructions = (
      <div className="instruction">
        <p>
          {exercise.repeats} reps {exercise.bothSided && "each"}
        </p>
        <button className="btn hvr-info" onClick={onComplete}>
          Complete
        </button>
      </div>
    );
  }

  return <React.Fragment>{exerciseInstructions}</React.Fragment>;
};

export default ExerciseInstructions;
